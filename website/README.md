# Ultra-Low-Latency NIC Drivers Website

Beautiful React/Next.js landing page for the Ultra-Low-Latency NIC Drivers library.

## Design Philosophy

**Silicon Valley Meets Wall Street**
- Light theme for professional credibility
- Data-first approach with performance metrics as hero content
- Minimal animations (subtle fades, hover effects)
- Inter typography for modern, clean aesthetics
- Interactive demos with real-time simulations

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Recharts** - Performance visualizations
- **next-seo** - SEO/AEO optimization

## Features

✅ **Hero Section** - ASCII logo, 20-50ns gradient text, stat cards  
✅ **Architecture Pipeline** - Horizontal visualization of packet flow  
✅ **Features Grid** - 6 key features with icons  
✅ **Performance Charts** - Latency & throughput benchmarks (Recharts)  
✅ **Interactive Demo** - Real-time packet simulation  
✅ **Use Cases** - HFT, Telecom, Industrial IoT, Research  
✅ **Quick Start** - 3-step installation guide  
✅ **FAQ** - Accordion with 8 common questions  
✅ **SEO/AEO** - JSON-LD schemas, OpenGraph, Twitter cards  

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

Visit http://localhost:3000

## SEO Optimization

### Technical SEO
- Static HTML export for fast loading
- Compression enabled (gzip/brotli)
- ETag generation for caching
- Semantic HTML structure
- Responsive meta viewport
- Canonical URLs

### Structured Data (AEO)
- SoftwareSourceCode schema
- SoftwareApplication schema
- FAQ schema for rich results
- Organization/Person schema
- Breadcrumb navigation

### Performance
- Image optimization (next/image)
- Code splitting (automatic)
- Font optimization (next/font)
- CSS minification
- Tree shaking

## Deployment

### Static Export (Recommended)

```bash
npm run build
npm run export
```

Deploy the `out/` directory to:
- **GitHub Pages** - Free, custom domain support
- **Netlify** - Auto-deploy from git, CDN
- **Vercel** - Optimal for Next.js
- **AWS S3 + CloudFront** - Enterprise CDN

### Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://ull-nic.krishnabajpai.me
NEXT_PUBLIC_GITHUB_REPO=https://github.com/krishnabajpai/ultra-low-latency-nic-drivers
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   └── page.tsx            # Main landing page
├── components/
│   ├── SEO.tsx             # SEO/AEO component
│   ├── Hero.tsx            # Hero section
│   ├── ArchitecturePipeline.tsx
│   ├── Features.tsx        # Features grid
│   ├── PerformanceCharts.tsx # Recharts visualizations
│   ├── InteractiveDemo.tsx # Packet simulation
│   ├── UseCases.tsx        # Industry use cases
│   ├── QuickStart.tsx      # Installation guide
│   ├── FAQ.tsx             # Accordion FAQ
│   └── Footer.tsx          # Footer with links
├── styles/
│   └── globals.css         # Tailwind + custom styles
├── public/                 # Static assets
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## Color Palette

- **Primary Blue**: `#2563eb` (blue-600)
- **Accent Indigo**: `#4f46e5` (indigo-600)
- **Text**: `#111827` (gray-900)
- **Background**: `#ffffff` (white)
- **Surface**: `#f9fafb` (gray-50)
- **Border**: `#e5e7eb` (gray-200)

## Typography

- **Sans**: Inter (Google Fonts)
- **Mono**: JetBrains Mono (code blocks)
- **Headings**: Bold, tight leading
- **Body**: Regular, relaxed leading

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Same as parent project

## Contact

For questions or support, visit the [GitHub repository](https://github.com/krishnabajpai/ultra-low-latency-nic-drivers).
