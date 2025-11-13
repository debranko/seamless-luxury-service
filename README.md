# Obedio - The Intelligence of Service

Premium luxury service platform website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Multi-page Architecture**: Separate pages for Home, Products, Technology, Bespoke Design, and Contact
- **Premium Design**: Luxury color palette with gold accents, serif typography, and smooth animations
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Performance**: Optimized images and lazy loading with Next.js Image component
- **Animations**: Smooth scroll animations using Framer Motion
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /page.tsx           # Home page
  /products/page.tsx  # Products page
  /technology/page.tsx # Technology page
  /bespoke/page.tsx   # Bespoke Design page
  /contact/page.tsx   # Contact page
  /layout.tsx         # Root layout
  /globals.css        # Global styles

/components
  /Navigation.tsx     # Navigation component
  /Footer.tsx         # Footer component

/public
  /images/            # Product images
```

## Color Palette

- **Dark Backgrounds**: #0A0A0A, #1A1A1A
- **Gold Accents**: #B8954A, #D4AF37
- **Bronze**: #8B7355
- **Cream Text**: #F5F5F0
- **Gray**: #E5E5E5, #2A2A2A

## License

Copyright © 2025 Obedio. All rights reserved.
