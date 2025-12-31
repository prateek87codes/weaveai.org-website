import Link from "next/link";
import { Check, Star } from "lucide-react";

export default function Pricing() {
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
        "2M token context window"
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
        "OR bring your own API key",
        "Chat history backup",
        "Priority support",
        "Early access to new features",
        "Cancel anytime"
      ],
      cta: "Get Started",
      href: "/pricing",
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
        "Premium support (24/7)",
        "Custom integrations"
      ],
      cta: "Go Premium",
      href: "/pricing",
      highlighted: false
    }
  ];

  return (
    <section className="bg-slate-50 py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105 border-4 border-primary-400' 
                  : 'bg-white text-slate-900 shadow-sm border border-slate-200'
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
                target={plan.href.startsWith('http') ? '_blank' : undefined}
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

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm">
            💳 All plans include a 48-hour free trial • No credit card required
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Questions? <Link href="mailto:support@weaveai.org" className="text-primary-600 hover:text-primary-700 font-semibold">Contact us</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

