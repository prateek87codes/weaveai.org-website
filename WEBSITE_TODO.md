# WeaveAI Website - Future Changes & Features

> **Purpose**: Track all future enhancements, features, and changes to be made to the website  
> **Last Updated**: January 15, 2026  
> **Status**: Active - Add items as needed

---

## ✅ Recently Completed

### **Simplified Website Structure**
**Status**: ✅ Completed (January 15, 2026)  
**Description**: Moved Features page content to homepage, simplified navigation to single-page scroll

**Changes Made:**
- Created `Features` component from features page content
- Added Features section to homepage (before UseCases section)
- Updated navigation to scroll to sections instead of separate pages
- All content now on one scrollable homepage

---

## 🎯 Future Features & Enhancements

### **Dynamic Live Stats**
**Status**: 📋 Planned  
**Priority**: Medium  
**Description**: Replace static social proof numbers with dynamic, real-time statistics

**Details:**
- Remove hardcoded numbers (500+ users, 10K+ prompts, 4.8/5 rating)
- Create API endpoint or Supabase query to fetch real-time stats:
  - Total active users
  - Total prompts processed
  - Average user rating
- Display live numbers that update automatically
- Add loading state while fetching
- Cache data to reduce API calls

**Implementation Notes:**
- Can use Supabase to query `user_profiles` and `usage_tracking` tables
- Consider caching for 5-10 minutes to reduce load
- Add error handling for API failures
- Show "Live" indicator or last updated timestamp

**Location**: `components/CTA.tsx` - Add back social proof section with dynamic data

---

## 📝 Content Updates

### **To Be Added**
- [ ] Add real customer testimonials (when available)
- [ ] Add case studies or use case examples
- [ ] Add video demo to hero section
- [ ] Add blog section (optional)

---

## 🎨 Design Improvements

### **To Be Considered**
- [ ] Add animations/transitions for better UX
- [ ] Improve mobile responsiveness (test on more devices)
- [ ] Add dark mode toggle (optional)
- [ ] Optimize images further (WebP format)

---

## 🔧 Technical Improvements

### **To Be Done**
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Add error tracking (Sentry, etc.)
- [ ] Optimize bundle size
- [ ] Add sitemap.xml generation
- [ ] Add robots.txt optimization

---

## 📊 SEO Enhancements

### **To Be Added**
- [ ] Add structured data (JSON-LD) for better search visibility
- [ ] Create blog/content section for SEO
- [ ] Add more internal linking
- [ ] Optimize meta descriptions further

---

## 🚀 Performance Optimizations

### **To Be Done**
- [ ] Implement image lazy loading
- [ ] Add service worker for offline support (PWA)
- [ ] Optimize font loading
- [ ] Add resource hints (preconnect, prefetch)

---

## 📱 Additional Pages (Future)

### **Account/Dashboard Page** ⭐
**Status**: 📋 Designed - Ready for Implementation  
**Priority**: High  
**Description**: Web-based account dashboard for users to manage subscriptions, view usage, and configure settings

**Details:**
- See `ACCOUNT_PAGE_DESIGN.md` for complete design proposal
- Key features:
  - Subscription management (via Stripe Customer Portal)
  - Usage analytics and charts
  - Prompt history
  - Invoice history
  - BYOK API key management
  - Settings sync with extension
- Authentication: Google OAuth or Magic Link (same as extension)
- Integration: Uses existing Supabase backend and Stripe integration

**Implementation Phases:**
- Phase 1: MVP (Auth, Dashboard, Subscription status)
- Phase 2: Enhanced (Analytics, History, Invoices)
- Phase 3: Advanced (BYOK, Export, Notifications)

### **Other Potential Pages**
- [ ] Blog/News page
- [ ] Case studies page
- [ ] Integrations page
- [ ] Developer API documentation
- [ ] Changelog page

---

## 🔄 Regular Maintenance

### **Ongoing Tasks**
- [ ] Update pricing if plans change
- [ ] Update feature list as extension evolves
- [ ] Keep FAQ section current
- [ ] Update screenshots/demos regularly
- [ ] Review and update content quarterly

---

## 📝 Notes

- Keep this file updated as new ideas come up
- Mark items as "In Progress" when working on them
- Mark as "Completed" when done
- Add dates when items are completed

---

**Last Review**: January 15, 2026
