'use client'

import { useEffect } from 'react'

export default function VisitorNotifier() {
  useEffect(() => {
    // Only notify once per session
    if (sessionStorage.getItem('visitor_notified')) return

    const notifyVisit = async () => {
      try {
        await fetch('/api/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent
          })
        })
        sessionStorage.setItem('visitor_notified', 'true')
      } catch (error) {
        // Silently fail - don't affect user experience
      }
    }

    notifyVisit()
  }, [])

  return null
}
