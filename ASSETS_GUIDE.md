# WeaveAI Website - Assets Guide

Guide to prepare and add all required images for the website.

## 📋 Required Assets Checklist

- [ ] Logo (200x200px PNG)
- [ ] Demo Screenshot (1400x900px PNG)
- [ ] OG Image for Social (1200x630px PNG/JPG)
- [ ] Favicon (32x32px ICO)
- [ ] Optional: Additional feature screenshots

---

## 🎨 Asset Specifications

### 1. Logo (logo.png)

**Purpose:** Navigation header, footer, favicon base

**Specifications:**
- Size: 200x200px (or larger, will be scaled)
- Format: PNG with transparency
- Content: Your woven pattern W icon
- Background: Transparent

**Usage:**
- Navigation bar (scaled to 40x40)
- Footer (scaled to 40x40)
- Comparison table
- Social preview

**How to Create:**
You already have the woven pattern logo images. Use one of these:
- The circular woven pattern with W letter
- Convert to PNG if needed
- Ensure transparency around edges

---

### 2. Demo Screenshot (demo.png)

**Purpose:** Hero section showcase

**Specifications:**
- Size: 1400x900px (or 1600x1000px)
- Format: PNG or high-quality JPG
- Content: Chrome browser with WeaveAI extension open
- Show: Side panel + webpage side-by-side

**What to Include:**
1. Chrome browser window
2. Your extension's side panel open
3. A sample conversation visible
4. A webpage in the background (e.g., a PDF or article)
5. Clean, professional look

**How to Create:**
```bash
# Take a screenshot of your extension
1. Open Chrome with WeaveAI installed
2. Navigate to an interesting webpage (e.g., research paper)
3. Open the side panel
4. Ask a demo question
5. Take screenshot (Cmd+Shift+4 on Mac)
6. Crop to 1400x900
7. Save as demo.png
```

**Alternative:** Use a mockup tool like [Screely](https://www.screely.com/) or [Shots](https://shots.so/) to add a nice browser frame.

---

### 3. Open Graph Image (og-image.png)

**Purpose:** Social media previews (Twitter, Facebook, LinkedIn)

**Specifications:**
- Size: 1200x630px (required by social platforms)
- Format: PNG or JPG
- File size: < 1MB
- Content: Logo + Tagline + Visual element

**Design Template:**

```
┌─────────────────────────────────┐
│                                 │
│         [WeaveAI Logo]          │
│                                 │
│   Chat with Any Webpage         │
│        Using AI                 │
│                                 │
│  ✓ PDFs  ✓ YouTube  ✓ Docs     │
│                                 │
└─────────────────────────────────┘
```

**How to Create:**
1. Use [Canva](https://www.canva.com/) (free)
2. Create new design: 1200x630px
3. Add your logo at top center
4. Add headline: "Chat with Any Webpage Using AI"
5. Add feature icons or text
6. Use your brand colors (teal #0d9488 + tan #d4a574)
7. Download as PNG

**Quick Tool:** [OG Image Generator](https://og-image.vercel.app/)

---

### 4. Favicon (favicon.ico)

**Purpose:** Browser tab icon

**Specifications:**
- Size: 32x32px (or multi-size: 16x16, 32x32, 48x48)
- Format: ICO
- Content: Simplified version of your logo

**How to Create:**
1. Use your logo image
2. Scale down to 32x32px
3. Simplify design if needed (remove fine details)
4. Convert to .ico format

**Tools:**
- [Favicon.io](https://favicon.io/) - Convert PNG to ICO
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Generate all sizes

---

## 📁 File Organization

Place all files in `/public/` directory:

```
website/public/
├── logo.png           # 200x200, transparent PNG
├── demo.png           # 1400x900, extension screenshot
├── og-image.png       # 1200x630, social preview
├── favicon.ico        # 32x32, browser icon
└── pattern-weave.svg  # (already created) background pattern
```

---

## 🖼️ Optional: Additional Screenshots

For the features page, you may want more screenshots:

### Feature Screenshots
- `feature-pdf.png` - PDF extraction demo
- `feature-youtube.png` - YouTube transcript demo
- `feature-multitab.png` - Multi-tab comparison demo
- `feature-googledocs.png` - Google Docs integration

Specifications: 800x600px PNG

---

## 🚀 Using Your Existing Assets

You provided two logo images. Here's how to use them:

### Image 1: Woven Pattern Text Logo
- The elongated weave pattern spelling "WEAVE AI"
- Use as: Alternative banner or header image
- Save as: `banner-logo.png` (optional)

### Image 2: Circular Woven Pattern with W
- The circular woven pattern with W letter
- Use as: Main logo (logo.png)
- Perfect for: Navigation, favicon base, social icons

**Recommended:** Use Image 2 (circular W) as your primary logo.

---

## 🛠️ Quick Setup Script

```bash
# Navigate to public directory
cd /Users/prateekgoel/Documents/WeaveAI/website/public

# Copy your assets (adjust paths as needed)
cp ~/Downloads/logo-circular.png ./logo.png
cp ~/Downloads/extension-screenshot.png ./demo.png
cp ~/Downloads/og-social-image.png ./og-image.png
cp ~/Downloads/favicon.ico ./favicon.ico

# Verify files
ls -lh
```

---

## ✅ Asset Checklist After Adding

Test each asset:

- [ ] Navigation shows logo (check at `http://localhost:3000`)
- [ ] Hero section shows demo screenshot
- [ ] Browser tab shows favicon
- [ ] Share link on Twitter/Facebook - check preview
- [ ] Footer shows logo
- [ ] Comparison table shows logo
- [ ] All images load quickly (< 1MB each)

---

## 🎨 Design Tips

### Color Scheme (From Your Logo)
- Primary: Teal/Dark Green (#0d9488, #115e59)
- Accent: Tan/Gold (#d4a574, #b87333)
- Background: White/Slate (#f8fafc)

### Consistent Branding
- Use woven pattern motif throughout
- Maintain teal + tan color palette
- Keep typography clean (Inter font)

---

## 📊 Image Optimization

Before deploying, optimize your images:

### Tools:
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Google's image compressor
- [ImageOptim](https://imageoptim.com/) - Mac app

### Target Sizes:
- logo.png: < 50KB
- demo.png: < 500KB
- og-image.png: < 200KB
- favicon.ico: < 10KB

---

## 🔍 Testing Social Previews

After adding og-image.png and deploying:

1. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Enter: https://weaveai.org
   - Check image shows correctly

2. **Facebook Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Enter: https://weaveai.org
   - Click "Scrape Again" if needed

3. **LinkedIn Preview**
   - Post your URL in LinkedIn
   - Check preview before posting

---

## 🎭 Alternative: Use Placeholders Temporarily

If you don't have all assets ready yet:

1. **Keep the placeholders** - Website will still work
2. **Use emoji** - Replace images with text/emoji temporarily
3. **Text-only hero** - Skip the demo image initially
4. **Generic OG image** - Use a simple text-based preview

You can deploy first, add images later!

---

## 📞 Need Design Help?

**Free Design Resources:**
- [Canva](https://canva.com) - Create OG images
- [Figma](https://figma.com) - Design mockups
- [Unsplash](https://unsplash.com) - Free stock photos
- [Lucide Icons](https://lucide.dev) - Icons (already in use)

**Paid Design Help:**
- Fiverr - $20-50 for logo + assets
- Upwork - $100-300 for full brand kit
- 99designs - $299+ for design contest

---

## ✨ Final Result

With all assets in place, your website will have:

✅ Professional branding  
✅ Fast loading times  
✅ Beautiful social previews  
✅ Consistent visual identity  
✅ Trust-building design

---

**Next Steps:**
1. Prepare your assets using this guide
2. Add to `/public/` directory
3. Test locally with `npm run dev`
4. Deploy to Vercel!

