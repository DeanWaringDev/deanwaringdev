# DeanWaringDev - Professional Software Development Website

A professional business website showcasing software development services, built with accessibility and code quality as top priorities.

## 🎯 Project Goals

This website serves as the digital presence for DeanWaringDev, a professional software development business launching April 1, 2026. The site demonstrates:

- **Accessibility Excellence**: WCAG AAA compliant
- **Code Quality**: Clean, well-commented, maintainable code
- **Professional Design**: Modern, minimal design with brand identity
- **Performance**: Optimized for speed and SEO

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (body), Poppins (headings)
- **Deployment**: Vercel
- **Version Control**: Git/GitHub

## 🎨 Brand Colors

- **Primary Navy**: `#0B1D39` - Main brand color, backgrounds, headers
- **Primary Orange**: `#F97A20` - Accent color, CTAs, highlights
- **Secondary Grey**: `#5A6872` - Body text, secondary elements
- **Secondary Off-White**: `#EFE9E1` - Backgrounds, contrast
- **Secondary Blue**: `#4EA5D9` - Interactive elements, hover states

All color combinations tested for WCAG AAA compliance (7:1+ contrast ratio).

## ♿ Accessibility Features

- **WCAG AAA Compliant**: Highest level of web accessibility
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Skip Navigation**: Skip to main content link for screen reader users
- **ARIA Landmarks**: Proper semantic HTML5 structure
- **Screen Reader Support**: Comprehensive ARIA labels and semantic markup
- **Color Contrast**: Minimum 7:1 ratio for normal text, 4.5:1 for large text
- **Reduced Motion**: Respects user's motion preferences
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Focus Management**: Proper focus handling for modals and menus

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/DeanWaringDev/deanwaringdev.git

# Navigate to project directory
cd deanwaringdev

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
deanwaringdev/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with accessibility features
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles with WCAG compliance
│   └── [routes]/          # Additional pages
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation with mobile menu
│   └── Footer.tsx        # Footer with links and social
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🌐 Deployment on Vercel

This site is optimized for deployment on Vercel:

### Quick Deploy Steps:

1. **Push to GitHub** (already done ✅)
2. **Import Project in Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your `deanwaringdev` repository
3. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
4. **Add Environment Variables** (optional):
   ```
   NEXT_PUBLIC_SITE_URL=https://deanwaringdev.com
   NEXT_PUBLIC_SITE_NAME=DeanWaringDev
   ```
5. **Deploy**: Click "Deploy" and Vercel handles the rest!
6. **Custom Domain**: Add `deanwaringdev.com` in Project Settings → Domains

### Automatic Deployments:

- **Production**: Pushes to `main` branch deploy to production
- **Preview**: Pull requests create preview deployments
- **Rollback**: One-click rollback in Vercel dashboard

## 📝 Code Standards

- **Comments**: Comprehensive JSDoc-style comments on all components
- **TypeScript**: Strict type checking enabled
- **Accessibility**: Every feature built with a11y in mind
- **Semantic HTML**: Proper use of HTML5 elements
- **Clean Code**: Readable, maintainable, well-structured

## 🎓 Portfolio Projects Featured

- **GCSEFastTrack** - English language learning platform
- **Childminding Management** - Complete childminding management system
- **WheelchairRacer** - UK running events platform for wheelchair athletes

## 📄 License

© 2026 DeanWaringDev. All rights reserved.

## 🤝 Contact

- **Email**: hello@deanwaringdev.com
- **GitHub**: [@DeanWaringDev](https://github.com/DeanWaringDev)
- **Website**: [deanwaringdev.com](https://deanwaringdev.com)

---

**Built with accessibility, quality, and professionalism in mind.**
