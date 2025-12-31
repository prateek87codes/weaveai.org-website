import Link from "next/link";
import { Check, Star, ArrowRight, HelpCircle } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      duration: "48 hours",
      description: "Try all features risk-free",
      features: [
        "30 free prompts",
        "All AI models (GPT-4, Claude, Gemini)",
        "PDF support (500 pages)",
        "Multi-tab comparison (5 tabs)",
        "YouTube transcripts",
        "Google Docs integration",
        "2M token context window",
        "Full feature access"
      ],
      cta: "Start Free Trial",
      href: "https://chrome.google.com/webstore",
      highlighted: false
    },
    {
      name: "Basic",
      price: "$4.99",
      duration: "per month",
      description: "Perfect for regular users",
      features: [
        "Everything in Free Trial",
        "Unlimited prompts (managed)",
        "OR bring your own API key (BYOK)",
        "Chat history backup",
        "Priority email support",
        "Early access to new features",
        "Cancel anytime"
      ],
      cta: "Get Started",
      href: "https://chrome.google.com/webstore",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$14.99",
      duration: "per month",
      description: "For power users",
      features: [
        "Everything in Basic",
        "Separate Flash & Advanced pools",
        "Higher rate limits",
        "Premium AI models access",
        "Advanced analytics",
        "Premium support (priority, 24/7)",
        "Custom integrations"
      ],
      cta: "Go Premium",
      href: "https://chrome.google.com/webstore",
      highlighted: false
    }
  ];

  const faqs = [
    {
      q: "What's Option A (Managed) vs Option B (BYOK)?",
      a: "Option A: We provide AI access through our API keys. Option B: You provide your own API keys. Both are the same price and give unlimited prompts."
    },
    {
      q: "Can I switch between plans?",
      a: "Yes! You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      q: "Do you offer annual plans?",
      a: "Not yet, but we're working on it! Annual plans with discounts are coming soon."
    },
    {
      q: "What happens after the free trial?",
      a: "After 48 hours or 30 prompts, you can choose a paid plan or continue using your own API keys (BYOK) for free."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Simple, transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800"> pricing</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Start free. Upgrade when you're ready. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl p-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105 border-4 border-primary-400' 
                    : 'bg-white text-slate-900 shadow-sm border-2 border-slate-200'
                } transition-all hover:scale-105`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1 text-sm font-semibold text-primary-600">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-primary-100' : 'text-slate-500'}>
                    {plan.duration}
                  </span>
                </div>
                <p className={`mb-8 ${plan.highlighted ? 'text-primary-50' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-primary-200' : 'text-primary-600'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.href}
                  target="_blank"
                  className={`block w-full rounded-lg py-3 px-6 font-semibold text-center transition-all ${
                    plan.highlighted
                      ? 'bg-white text-primary-600 hover:bg-primary-50'
                      : 'bg-primary-600 text-white hover:bg-primary-500'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Compare all features
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-slate-900">Free Trial</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-primary-600">Basic</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-slate-900">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { feature: "Duration", trial: "48 hours", basic: "Monthly", premium: "Monthly" },
                  { feature: "Prompts", trial: "30 prompts", basic: "Unlimited", premium: "Unlimited" },
                  { feature: "PDF Support (500 pages)", trial: "✓", basic: "✓", premium: "✓" },
                  { feature: "Multi-tab comparison", trial: "✓", basic: "✓", premium: "✓" },
                  { feature: "YouTube transcripts", trial: "✓", basic: "✓", premium: "✓" },
                  { feature: "Google Docs/Slides", trial: "✓", basic: "✓", premium: "✓" },
                  { feature: "AI Models", trial: "All 7 models", basic: "All 7 models", premium: "All 7 models" },
                  { feature: "BYOK Support", trial: "—", basic: "✓", premium: "✓" },
                  { feature: "Chat history backup", trial: "—", basic: "✓", premium: "✓" },
                  { feature: "Separate Flash/Advanced pools", trial: "—", basic: "—", premium: "✓" },
                  { feature: "Support", trial: "Community", basic: "Priority email", premium: "Priority 24/7" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-4 px-6 text-sm text-slate-700 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-sm text-slate-600 text-center">{row.trial}</td>
                    <td className="py-4 px-6 text-sm text-primary-600 text-center font-semibold">{row.basic}</td>
                    <td className="py-4 px-6 text-sm text-slate-600 text-center">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Pricing FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">More questions?</p>
            <Link href="/#faq" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
              View all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Start your free 48-hour trial today. No credit card required.
          </p>
          <div className="mt-8">
            <Link
              href="https://chrome.google.com/webstore"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-lg hover:bg-primary-50 transition-all hover:scale-105"
            >
              Add to Chrome - Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

