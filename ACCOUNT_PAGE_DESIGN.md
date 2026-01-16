# WeaveAI Account Page Design Proposal

> **Purpose**: Design proposal for the WeaveAI account/dashboard page on the website
> 
> **Last Updated**: January 2026
> 
> **Status**: Design Phase - Ready for Implementation

---

## 🎯 Overview

The account page serves as a **web-based dashboard** where users can:
- View subscription status and usage
- Manage billing and payments
- Configure extension settings
- Access support and documentation
- View usage history and analytics

**Key Insight**: Most users will manage things in the extension, but a web dashboard provides:
- Better experience for billing/subscription management
- Easier access from any device
- More space for detailed analytics
- Professional appearance for enterprise users

---

## 📐 Layout Structure

### Option A: Sidebar Navigation (Recommended)

```
┌─────────────────────────────────────────────────────────┐
│  Header: Logo | Navigation | Sign Out                    │
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ Sidebar  │  Main Content Area                          │
│          │                                              │
│ • Dashboard                                             │
│ • Subscription                                          │
│ • Usage & Analytics                                     │
│ • API Keys (BYOK)                                       │
│ • Settings                                              │
│ • Billing & Invoices                                    │
│ • Help & Support                                        │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

### Option B: Tab Navigation (Alternative)

```
┌─────────────────────────────────────────────────────────┐
│  Header: Logo | Navigation | Sign Out                    │
├─────────────────────────────────────────────────────────┤
│  [Dashboard] [Subscription] [Usage] [Settings] [Billing] │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Main Content Area                                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Recommendation**: Use **Option A (Sidebar)** for better scalability as features grow.

---

## 🎨 Page Sections & Features

### 1. Dashboard (Home/Overview)

**Purpose**: Quick overview of account status at a glance

**Content**:
```
┌─────────────────────────────────────────────────────┐
│  Welcome back, [User Name]                          │
│  [User Email]                                       │
└─────────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  Subscription    │  │  Usage This Month│  │  Quick Actions  │
│                  │  │                  │  │                  │
│  [Tier Badge]    │  │  [Progress Bar]  │  │  • Upgrade Plan  │
│  Basic - Active  │  │  450 / 800       │  │  • Buy Top-Up    │
│  Renews: Jan 15  │  │  56% used        │  │  • View Invoices │
│                  │  │                  │  │  • Get Help       │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌─────────────────────────────────────────────────────┐
│  Recent Activity                                    │
│  • Prompt used - 2 hours ago                        │
│  • Subscription renewed - 3 days ago                │
│  • Top-up purchased - 1 week ago                    │
└─────────────────────────────────────────────────────┘
```

**Key Elements**:
- Account status badge (Trial/Basic/Premium/Expired)
- Usage progress bar with visual indicator
- Quick action buttons
- Recent activity feed
- Upgrade prompts (if on lower tier)

---

### 2. Subscription Management

**Purpose**: View and manage subscription details

**Content**:
```
┌─────────────────────────────────────────────────────┐
│  Current Plan                                        │
│  ┌─────────────────────────────────────────────────┐ │
│  │  [Plan Badge]  Basic Plan                       │ │
│  │  $4.99/month • Billed monthly                   │ │
│  │  Next billing: January 15, 2026                   │ │
│  │  Status: Active ✅                               │ │
│  └─────────────────────────────────────────────────┘ │
│                                                       │
│  [Manage Subscription] [Upgrade to Premium]          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Plan Details                                        │
│  • 800 prompts/month                                │
│  • All AI models (GPT-4, Claude, Gemini)            │
│  • Multi-tab comparison (up to 3 tabs)            │
│  • PDF support (up to 500 pages)                   │
│  • YouTube transcripts                              │
│  • Google Docs integration                          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Available Plans                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │ Free Trial   │  │ Basic        │  │ Premium      ││
│  │ $0           │  │ $4.99/mo    │  │ Coming Soon  ││
│  │ 50 prompts   │  │ 800/mo       │  │              ││
│  │              │  │              │  │              ││
│  │ [Current]    │  │ [Upgrade]    │  │ [Notify Me]  ││
│  └──────────────┘  └──────────────┘  └──────────────┘│
└─────────────────────────────────────────────────────┘
```

**Key Features**:
- Current plan details with renewal date
- "Manage Subscription" button → Opens Stripe Customer Portal
- Plan comparison table
- Upgrade/downgrade options
- BYOK status indicator (if applicable)

---

### 3. Usage & Analytics

**Purpose**: Track usage patterns and prompt history

**Content**:
```
┌─────────────────────────────────────────────────────┐
│  Usage This Month                                    │
│  ┌─────────────────────────────────────────────────┐ │
│  │  [Visual Progress Bar]                          │ │
│  │  450 / 800 prompts used (56%)                   │ │
│  │  350 remaining                                  │ │
│  └─────────────────────────────────────────────────┘ │
│                                                       │
│  [Buy Top-Up: 200 prompts for $2.99]                 │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Usage Trends                                        │
│  [Line Chart: Prompts per day over last 30 days]     │
│                                                       │
│  Daily Average: 15 prompts                          │
│  Peak Day: 45 prompts (Jan 10)                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Model Usage Breakdown                               │
│  • GPT-4: 180 prompts (40%)                         │
│  • Claude: 150 prompts (33%)                         │
│  • Gemini: 120 prompts (27%)                        │
│                                                       │
│  [Pie Chart Visualization]                           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Recent Prompts                                      │
│  Date       | Model    | Content Type | Status      │
│  ─────────────────────────────────────────────────  │
│  Jan 12     | GPT-4    | Web Page     | ✅ Success   │
│  Jan 12     | Claude   | PDF          | ✅ Success   │
│  Jan 11     | Gemini   | YouTube      | ✅ Success   │
│                                                       │
│  [View All History] [Export CSV]                     │
└─────────────────────────────────────────────────────┘
```

**Key Features**:
- Real-time usage tracking
- Visual charts and graphs
- Model usage breakdown
- Prompt history (last 30 days)
- Export functionality
- Top-up purchase option

---

### 4. API Keys (BYOK - Bring Your Own Key)

**Purpose**: Manage API keys for users on Option B (BYOK)

**Content**:
```
┌─────────────────────────────────────────────────────┐
│  Bring Your Own Key (BYOK)                          │
│                                                       │
│  Status: ✅ Active                                    │
│  You're using your own API keys for unlimited        │
│  prompts during your subscription period.            │
│                                                       │
│  ⚠️ Your API keys are stored locally in the          │
│  extension and never sent to our servers.            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Configured Keys                                     │
│  ┌─────────────────────────────────────────────────┐ │
│  │  OpenAI API Key                                  │ │
│  │  sk-...**** (last 4: abcd)                      │ │
│  │  [Edit] [Remove]                                │ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │  Anthropic API Key                               │ │
│  │  sk-ant-...**** (last 4: xyz1)                  │ │
│  │  [Edit] [Remove]                                │ │
│  └─────────────────────────────────────────────────┘ │
│                                                       │
│  [Add New API Key]                                   │
│                                                       │
│  Note: To add or edit keys, open the extension       │
│  Settings panel. Keys are stored locally only.       │
└─────────────────────────────────────────────────────┘
```

**Key Features**:
- BYOK status indicator
- List of configured keys (masked)
- Link to extension settings for key management
- Security messaging

---

### 5. Settings

**Purpose**: Configure account and extension preferences

**Content**:
```
┌─────────────────────────────────────────────────────┐
│  Account Settings                                    │
│  ┌─────────────────────────────────────────────────┐ │
│  │  Email Address                                  │ │
│  │  user@example.com                              │ │
│  │  [Change Email]                                │ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │  Password                                       │ │
│  │  •••••••••••••••                               │ │
│  │  [Change Password]                             │ │
│  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Extension Settings                                  │
│  ┌─────────────────────────────────────────────────┐ │
│  │  Content Caching                                │ │
│  │  [Toggle: ON]                                   │ │
│  │  Cache page content for faster reloading        │ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │  Usage Statistics                                │ │
│  │  [Toggle: ON]                                   │ │
│  │  Track usage for analytics                      │ │
│  └─────────────────────────────────────────────────┘ │
│                                                       │
│  Note: These settings sync with your extension.      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Privacy & Data                                      │
│  • View Privacy Policy                              │
│  • Download your data                                │
│  • Delete account                                    │
│                                                       │
│  [Download Data] [Delete Account]                    │
└─────────────────────────────────────────────────────┘
```

**Key Features**:
- Email/password management
- Extension settings sync
- Privacy controls
- Data export/deletion

---

### 6. Billing & Invoices

**Purpose**: View payment history and manage billing

**Content**:
```
┌─────────────────────────────────────────────────────┐
│  Payment Method                                      │
│  ┌─────────────────────────────────────────────────┐ │
│  │  Visa •••• 4242                                 │ │
│  │  Expires: 12/25                                 │ │
│  │  [Update Payment Method]                        │ │
│  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Invoice History                                     │
│  Date         | Description        | Amount | Status│
│  ─────────────────────────────────────────────────  │
│  Dec 15, 2025 | Basic Plan         | $4.99   | Paid  │
│  Nov 15, 2025 | Basic Plan         | $4.99   | Paid  │
│  Oct 20, 2025 | Top-Up (200)       | $2.99   | Paid  │
│  Oct 15, 2025 | Basic Plan         | $4.99   | Paid  │
│                                                       │
│  [View All] [Download PDF]                           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Billing Address                                     │
│  [Edit Address Form]                                 │
└─────────────────────────────────────────────────────┘
```

**Key Features**:
- Payment method management (via Stripe Portal)
- Invoice history with download links
- Billing address management
- Receipt access

---

### 7. Help & Support

**Purpose**: Access documentation and get help

**Content**:
```
┌─────────────────────────────────────────────────────┐
│  Get Help                                            │
│  ┌─────────────────────────────────────────────────┐ │
│  │  📚 Documentation                                │ │
│  │  Learn how to use WeaveAI                       │ │
│  │  [View Docs]                                    │ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │  ❓ FAQ                                           │ │
│  │  Common questions and answers                   │ │
│  │  [View FAQ]                                     │ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │  💬 Contact Support                              │ │
│  │  ReachWeaveAI@gmail.com                         │ │
│  │  [Send Email]                                   │ │
│  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Quick Links                                         │
│  • How to cancel subscription                        │
│  • How to upgrade plan                               │
│  • How to use BYOK                                   │
│  • Troubleshooting guide                             │
└─────────────────────────────────────────────────────┘
```

**Key Features**:
- Documentation links
- FAQ section
- Contact support
- Quick help articles

---

## 🎨 Design Guidelines

### Color Scheme
- **Primary**: Use WeaveAI brand colors (primary-600, primary-800)
- **Success**: Green for active/positive states
- **Warning**: Orange/Red for low usage/expiring
- **Neutral**: Slate grays for text and backgrounds

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable sans-serif (Inter/System fonts)
- **Code/Keys**: Monospace for API keys

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Primary actions prominent, secondary subtle
- **Badges**: Color-coded for tier status
- **Progress Bars**: Visual with percentage
- **Charts**: Clean, minimal (Chart.js or Recharts)

### Responsive Design
- **Desktop**: Sidebar + main content (2-column)
- **Tablet**: Collapsible sidebar
- **Mobile**: Bottom navigation or hamburger menu

---

## 🔐 Authentication Flow

### Sign In Options

1. **From Website "Sign In" Button**
   - Redirects to: `/account/signin`
   - Options:
     - Email + Password (if implemented)
     - Google OAuth (same as extension)
     - Magic Link (for non-Gmail)

2. **After Sign In**
   - Redirect to: `/account/dashboard`
   - Store session in cookies/localStorage
   - Sync with extension (if user is logged in there)

3. **Session Management**
   - JWT tokens from Supabase
   - Auto-refresh on expiry
   - Logout clears all sessions

---

## 🚀 Implementation Phases

### Phase 1: MVP (Essential Features)
- [ ] Authentication (Sign In/Sign Out)
- [ ] Dashboard overview
- [ ] Subscription status
- [ ] Basic usage display
- [ ] Link to Stripe Customer Portal

### Phase 2: Enhanced Features
- [ ] Usage analytics and charts
- [ ] Prompt history
- [ ] Invoice history
- [ ] Settings sync with extension

### Phase 3: Advanced Features
- [ ] BYOK management
- [ ] Export data
- [ ] Advanced analytics
- [ ] Email notifications

---

## 📊 Data Sources

### Backend APIs Needed

1. **User Profile**
   - `GET /api/user/profile`
   - Returns: email, name, tier, subscription status

2. **Usage Data**
   - `GET /api/user/usage`
   - Returns: prompts used, remaining, limits, trends

3. **Subscription**
   - `GET /api/user/subscription`
   - Returns: plan details, renewal date, status

4. **Invoices**
   - `GET /api/user/invoices`
   - Returns: payment history, invoices

5. **Stripe Customer Portal**
   - `POST /api/stripe/portal` (already exists)
   - Returns: Stripe portal URL

---

## 🔗 Integration Points

### With Extension
- Share same Supabase authentication
- Sync settings via Supabase
- Real-time usage updates

### With Stripe
- Customer Portal for subscription management
- Webhook handlers for payment events
- Invoice generation

### With Website
- Consistent branding
- Navigation between marketing pages and account
- SEO-friendly URLs

---

## 💡 Inspiration from Similar Extensions

### Grammarly
- Clean dashboard with usage stats
- Clear subscription status
- Easy upgrade path

### LastPass
- Sidebar navigation
- Security-focused design
- Clear account status

### Notion
- Modern, minimal design
- Good use of whitespace
- Clear information hierarchy

---

## ✅ Next Steps

1. **Design Review**: Get feedback on this proposal
2. **Wireframes**: Create detailed wireframes for each section
3. **API Planning**: Define exact API endpoints needed
4. **Prototype**: Build a basic version to test UX
5. **Full Implementation**: Build complete account page

---

## 📝 Notes

- **Security**: All API keys should be masked, never displayed fully
- **Privacy**: Clear messaging about data storage and usage
- **Performance**: Lazy load charts and heavy components
- **Accessibility**: WCAG 2.1 AA compliance
- **Mobile**: Ensure mobile experience is excellent

---

**Questions or Feedback?** Update this document as needed!
