# WeaveAI Website - Deployment Guide

Complete step-by-step guide to deploy weaveai.org to Vercel (FREE hosting).

## ✅ Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] GitHub account
- [ ] Vercel account (sign up at [vercel.com](https://vercel.com))
- [ ] GoDaddy domain: weaveai.org
- [ ] Logo and images ready

---

## 📸 Step 1: Add Your Assets

Replace placeholder files in `/public/` with real images:

### Required Files:

1. **logo.png** (200x200px) - Your woven W logo
2. **demo.png** (1400x900px) - Extension screenshot
3. **og-image.png** (1200x630px) - Social media preview
4. **favicon.ico** (32x32px) - Browser icon

### How to Add:

```bash
# Navigate to website directory
cd /Users/prateekgoel/Documents/WeaveAI/website

# Copy your images
cp ~/Downloads/logo.png public/logo.png
cp ~/Downloads/demo-screenshot.png public/demo.png
cp ~/Downloads/og-image.png public/og-image.png
cp ~/Downloads/favicon.ico public/favicon.ico
```

---

## 🧪 Step 2: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and verify:
- ✅ All pages load correctly
- ✅ Images show up
- ✅ Navigation works
- ✅ Forms and buttons work
- ✅ Mobile responsive

---

## 📦 Step 3: Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

If build succeeds with no errors, you're ready to deploy!

---

## 🐙 Step 4: Push to GitHub

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "WeaveAI website initial deployment"

# Create main branch
git branch -M main

# Add GitHub remote (create repo first at github.com)
git remote add origin https://github.com/prateek87codes/weaveai-website.git

# Push to GitHub
git push -u origin main
```

---

## 🚀 Step 5: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Add New Project"**
3. **Import Git Repository**
   - Select your GitHub repo: `weaveai-website`
4. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto)
   - Output Directory: `out` (auto)
5. **Click "Deploy"**

Wait 2-3 minutes. Your site will be live at `https://weaveai-website-xyz.vercel.app`

### Option B: Manual Deployment via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🌐 Step 6: Connect Your GoDaddy Domain

### In Vercel:

1. **Go to Project Settings** → **Domains**
2. **Add Domain:** `weaveai.org`
3. **Add Domain:** `www.weaveai.org` (optional)
4. **Copy DNS values** shown by Vercel

### In GoDaddy:

1. **Log in to GoDaddy**
2. **Go to "My Products"**
3. **Find:** weaveai.org → Click **DNS**
4. **Delete existing A records** (if any)
5. **Add these records:**

#### Primary Domain (weaveai.org)

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600 seconds
```

#### WWW Subdomain (optional)

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600 seconds
```

6. **Save** and wait 24-48 hours for DNS propagation

---

## ✅ Step 7: Verify Deployment

### Check Domain Status in Vercel

- Go to Project Settings → Domains
- Status should show: **"Valid Configuration"**
- If it shows "Invalid", wait longer for DNS propagation

### Test Your Live Site

Visit: [https://weaveai.org](https://weaveai.org)

- ✅ Site loads correctly
- ✅ HTTPS (green padlock)
- ✅ All pages work
- ✅ Images load
- ✅ Mobile responsive

---

## 🔧 Step 8: Post-Deployment Optimization

### 1. Test Performance

Run [PageSpeed Insights](https://pagespeed.web.dev/):
```
https://pagespeed.web.dev/report?url=https://weaveai.org
```

Target: **90+ score** on all metrics

### 2. Test Social Previews

- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

Enter: `https://weaveai.org` and verify OG image appears

### 3. Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `weaveai.org`
3. Verify ownership (Vercel can do this automatically)
4. Submit sitemap: `https://weaveai.org/sitemap.xml`

---

## 🔄 Future Updates

### Making Changes

```bash
# Make your edits to files
# For example, edit app/page.tsx

# Test locally
npm run dev

# Commit changes
git add .
git commit -m "Update homepage copy"

# Push to GitHub
git push

# Vercel will automatically redeploy!
```

**Automatic Deployment:** Every push to `main` branch triggers a new deployment on Vercel.

### Rollback if Needed

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "..." → "Promote to Production"

---

## 🐛 Troubleshooting

### Issue: "Domain configuration invalid"

**Solution:** Wait 24-48 hours for DNS propagation. Check DNS with:
```bash
nslookup weaveai.org
```

### Issue: Images not loading

**Solution:**
```bash
# Check files exist
ls -la public/

# Rebuild
rm -rf .next out
npm run build
```

### Issue: Build fails on Vercel

**Solution:**
```bash
# Test build locally first
npm run build

# Check Node version matches
node -v  # Should be 18+
```

### Issue: Styles not applying

**Solution:**
```bash
# Rebuild Tailwind
npx tailwindcss -i ./app/globals.css -o ./out.css

# Clear cache
rm -rf .next
npm run build
```

---

## 📊 Monitoring

### Vercel Analytics (Free)

1. Go to Project → Analytics tab
2. View: Page views, visitors, top pages

### Custom Monitoring

Add your own analytics:
- Google Analytics
- Plausible Analytics
- Simple Analytics

---

## 💰 Cost Summary

| Service | Cost |
|---------|------|
| GoDaddy Domain | ~$15/year (already paid) |
| Vercel Hosting | **$0/month** (Hobby tier) |
| SSL Certificate | **$0** (included) |
| CDN | **$0** (included) |
| **Total Extra Cost** | **$0/month** |

Vercel free tier includes:
- 100GB bandwidth/month
- Unlimited sites
- Automatic HTTPS
- Global CDN
- Preview deployments

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] https://weaveai.org loads
- [ ] https://www.weaveai.org redirects (if configured)
- [ ] All pages accessible (/features, /pricing, /privacy, /terms)
- [ ] Logo and images visible
- [ ] Mobile responsive
- [ ] HTTPS secure (green padlock)
- [ ] Fast loading (<2 seconds)
- [ ] Social previews work
- [ ] Chrome extension link works

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Support:** support@weaveai.org

---

**🚀 You're all set! Your website is live at weaveai.org**

