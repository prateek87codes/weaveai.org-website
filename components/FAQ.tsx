"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "The free trial includes 50 prompts. You get full access to all features including multi-tab comparison, all AI providers, and Gemini Flash models. No credit card required."
    },
    {
      question: "What's BYOK (Bring Your Own Key)?",
      answer: "BYOK lets you use your own API keys from OpenAI, Anthropic, Google, Perplexity, Grok, Llama, Deepseek, or other providers. Your keys stay on your device and give you unlimited prompts. Perfect for users who already have API accounts."
    },
    {
      question: "How many tabs can I compare?",
      answer: "Free tier: No comparison. Basic tier: Up to 3 tabs. Premium tier (coming soon): Unlimited tabs."
    },
    {
      question: "Does WeaveAI work with Google Docs?",
      answer: "Yes! One-time Google login (OAuth), then seamless access to Google Docs, Sheets, and Slides. We use official Google Drive APIs - no scraping, fully privacy-compliant."
    },
    {
      question: "Which AI providers are supported?",
      answer: "WeaveAI supports OpenAI (GPT-4, GPT-4o-mini), Anthropic (Claude), Google (Gemini), Perplexity, Grok, Llama, and Deepseek. You can use any provider with BYOK."
    },
    {
      question: "Does WeaveAI store my passwords?",
      answer: "No. WeaveAI never has access to your passwords. For Google Docs/Sheets/Slides, we use OAuth 2.0, which means Google handles authentication and we only receive short-lived access tokens (not passwords)."
    },
    {
      question: "Where is my content stored?",
      answer: "All content is stored locally on your device only (chrome.storage.local). Content is never sent to WeaveAI servers. You can disable content caching in Settings → Privacy if you prefer."
    },
    {
      question: "What happens to my API keys (BYOK)?",
      answer: "Your API keys are stored encrypted on your device only. They go directly from your extension to your chosen LLM provider (OpenAI, Anthropic, etc.) - they never touch WeaveAI servers. You can delete them anytime in Settings."
    },
    {
      question: "Does WeaveAI track my browsing?",
      answer: "No. WeaveAI only reads page content when you explicitly send a prompt. It doesn't track your browsing history or monitor your activity passively."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Cancel your subscription anytime in Settings → Subscription. No long-term commitments."
    },
    {
      question: "What happens if I exceed my monthly prompt limit?",
      answer: "You'll see a notification when approaching your limit. You can upgrade to a higher tier, switch to BYOK, or wait for the monthly reset."
    },
    {
      question: "Can I use WeaveAI offline?",
      answer: "No. WeaveAI requires an internet connection to communicate with AI providers. However, cached content can be accessed offline."
    }
  ];

  return (
    <section className="bg-white py-24" id="faq">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about WeaveAI
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@weaveai.org"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}

