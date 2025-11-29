import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function POST(request: NextRequest) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json({ error: 'Telegram not configured' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const { page, referrer, userAgent } = body

    // Get visitor's IP and location from headers
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'Unknown'

    // Get country from Netlify's geo headers
    const country = request.headers.get('x-country') || 'Unknown'
    const city = request.headers.get('x-nf-client-connection-city') || 'Unknown'

    const timestamp = new Date().toLocaleString('sr-RS', { timeZone: 'Europe/Belgrade' })

    const message = `🔔 *Nova poseta na Obedio.de*

📍 *Lokacija:* ${city}, ${country}
📄 *Stranica:* ${page}
🔗 *Referrer:* ${referrer || 'Direct'}
🕐 *Vreme:* ${timestamp}
🌐 *IP:* ${ip}`

    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Telegram notification error:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}
