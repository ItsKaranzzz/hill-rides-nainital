# Hill Rides Nainital

Premium bike and scooty rental service for exploring the scenic hills of Nainital, India.

Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- **Scooty Fleet Catalog** -- Browse a curated collection of scooters with pricing, images, and descriptions
- **Pricing Plans** -- Basic, Standard, and Premium rental plans with transparent pricing
- **Contact & Booking** -- Contact form and quick-action buttons for WhatsApp and phone bookings
- **Admin Dashboard** -- Password-protected admin panel with booking management table
- **Dark / Light Mode** -- Class-based theme toggle with system preference detection, localStorage persistence, and zero flash on load
- **Fully Responsive** -- Mobile-first design that works across all screen sizes

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 15 (App Router, Turbopack)  |
| UI          | React 19, TypeScript                |
| Styling     | Tailwind CSS v4 (CSS-first config)  |
| Forms       | React Hook Form                     |
| Backend     | Supabase (client SDK)               |
| Fonts       | Geist Sans & Geist Mono (via next/font) |

## Project Structure

```
hill-rides-nainital/
├── app/
│   ├── (pages)/
│   │   ├── about/page.tsx        # About page
│   │   ├── admin/page.tsx        # Admin dashboard
│   │   ├── contact/page.tsx      # Contact form & info
│   │   ├── fleet/page.tsx        # Scooty fleet catalog
│   │   └── pricing/page.tsx      # Pricing plans
│   ├── globals.css               # Tailwind imports & theme tokens
│   ├── layout.tsx                # Root layout with theme support
│   └── page.tsx                  # Home page (hero + features)
├── components/
│   ├── BookingForm.tsx           # Booking form with validation
│   ├── Footer.tsx                # Site footer with social links
│   ├── Navbar.tsx                # Navigation bar with theme toggle
│   ├── ScootyCard.tsx            # Scooty listing card
│   ├── ThemeProvider.tsx         # System preference listener
│   └── ThemeToggle.tsx           # Dark/light mode toggle button
├── lib/
│   └── supabase.ts               # Supabase client
└── public/                        # Static assets (images, SVGs)
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ItsKaranzzz/hill-rides-nainital.git
cd hill-rides-nainital

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Dark Mode

The site supports both light and dark themes:

- **System preference** is respected by default via `matchMedia`
- **Manual toggle** in the navbar persists the choice to `localStorage`
- **No flash** on page load thanks to an inline script that sets the theme before first paint
- Implemented with Tailwind CSS v4's `@custom-variant dark` (class-based strategy)

## Pages

| Route      | Description                                    |
| ---------- | ---------------------------------------------- |
| `/`        | Hero section with CTA buttons + feature cards  |
| `/fleet`   | Scooty catalog with cards and booking links     |
| `/pricing` | Three-tier pricing plans + additional services  |
| `/about`   | Company story, values, and impact stats         |
| `/contact` | Contact info, WhatsApp link, and message form   |
| `/admin`   | Password-protected booking management dashboard |

## Deployment

Deploy to [Vercel](https://vercel.com) for the best Next.js experience:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ItsKaranzzz/hill-rides-nainital)

Or deploy to any platform that supports Node.js:

```bash
npm run build
npm start
```

## License

This project is private. All rights reserved.
