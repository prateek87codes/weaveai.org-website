# WeaveAI Website

Official website for WeaveAI - A Chrome extension that enables users to chat with any webpage, PDF, or YouTube video using AI.

🌐 **Live Site:** [weaveai.org](https://weaveai.org)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm start
```

## 📁 Project Structure

```
website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms of Service
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── FeatureDemo.tsx    # Feature demo
│   ├── UseCases.tsx       # Use cases section
│   ├── Comparison.tsx     # Comparison table
│   ├── Pricing.tsx        # Pricing cards
│   ├── FAQ.tsx            # FAQ section
│   └── CTA.tsx            # Call-to-action
├── public/                # Static assets
│   ├── logo.png           # WeaveAI logo
│   ├── demo.png           # Demo screenshot
│   ├── og-image.png       # Social preview image
│   └── pattern-weave.svg  # Background pattern
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🎨 Design System

### Colors

- **Primary:** Teal (#0d9488) - Trust, tech, sophistication
- **Accent:** Tan/Gold (#d4a574) - Warmth, woven pattern
- **Neutrals:** Slate grays

### Typography

- **Font:** Inter (system fallback)
- **Headings:** Bold, tracking-tight
- **Body:** Regular, leading-relaxed

### Components

All components use Tailwind CSS utility classes with custom theme extensions for WeaveAI branding.

## 🖼️ Adding Assets

### Required Images

Replace the placeholder files in `/public/` with your actual assets:

1. **logo.png** - Your woven pattern W logo
   - Recommended size: 200x200px
   - Format: PNG with transparency

2. **demo.png** - Extension demo screenshot
   - Recommended size: 1400x900px
   - Format: PNG
   - Show: Browser with extension side panel open

3. **og-image.png** - Social media preview
   - Required size: 1200x630px
   - Format: PNG or JPEG
   - Include: Logo + tagline + visual

4. **favicon.ico** - Browser tab icon
   - Size: 32x32px (or 16x16, 32x32, 48x48 multi-size)
   - Format: ICO

### How to Add Images

1. Save your images to `/public/` directory
2. They'll be automatically available at `https://weaveai.org/filename.png`
3. No code changes needed - already referenced in components

## 🚀 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/weaveai-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `weaveai.org`
   - Follow Vercel's instructions to update DNS

### Option 2: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔧 DNS Setup (GoDaddy)

To point your GoDaddy domain to Vercel:

1. **Log into GoDaddy**
2. **Go to Domain Settings** for weaveai.org
3. **Manage DNS**
4. **Add these records:**

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600 seconds

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600 seconds
```

5. **Wait 24-48 hours** for DNS propagation
6. **Verify in Vercel** - Domain should show as "Valid"

## 📝 Content Updates

### Update Pricing

Edit `/app/pricing/page.tsx` or `/components/Pricing.tsx`

### Update Features

Edit `/app/features/page.tsx`

### Update FAQ

Edit `/components/FAQ.tsx`

### Update Legal Pages

- Privacy Policy: `/app/privacy/page.tsx`
- Terms of Service: `/app/terms/page.tsx`

## 🎯 SEO Optimization

### Already Configured

✅ Meta tags (title, description, keywords)  
✅ Open Graph tags (for social media)  
✅ Twitter Card tags  
✅ Semantic HTML  
✅ Mobile responsive  
✅ Fast loading (static export)

### After Deployment

1. **Submit to Google Search Console**
   - Add your sitemap: `https://weaveai.org/sitemap.xml`
   - Request indexing

2. **Test Social Previews**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🧪 Testing

### Local Testing

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

### Browser Testing

Test on:
- Chrome (primary)
- Safari
- Firefox
- Mobile browsers

### Performance Testing

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ scores on all metrics

## 🔒 Security

- ✅ HTTPS enforced (Vercel provides SSL)
- ✅ No sensitive data in code
- ✅ Secure headers configured
- ✅ XSS protection enabled

## 📊 Analytics (Optional)

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `/app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next out node_modules
npm install
npm run build
```

### Styling Issues

```bash
# Rebuild Tailwind
npx tailwindcss -i ./app/globals.css -o ./out.css
```

### Images Not Loading

- Check file paths in `/public/`
- Ensure files are named exactly: `logo.png`, `demo.png`, etc.
- Clear browser cache

## 📞 Support

- **Website Issues:** [support@weaveai.org](mailto:support@weaveai.org)
- **Extension Repo:** [github.com/prateek87codes/WeaveAI](https://github.com/prateek87codes/WeaveAI)

## 📄 License

© 2025 WeaveAI. All rights reserved.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Vercel**

