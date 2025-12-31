"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does WeaveAI work?",
      answer: "WeaveAI is a Chrome extension that adds an AI chat panel to your browser. When you open a webpage, PDF, or YouTube video, the extension automatically extracts the content and makes it available to AI models (GPT-4, Claude, Gemini). You can then ask questions and get instant answers with citations."
    },
    {
      question: "Do I need to copy-paste content?",
      answer: "No! That's the magic of WeaveAI. The extension automatically reads the page content when you open it. Just start asking questions, and the AI already knows what's on the page. Works with web pages, PDFs (up to 500 pages), YouTube videos, and Google Docs."
    },
    {
      question: "What AI models can I use?",
      answer: "WeaveAI supports 7 AI providers: OpenAI (GPT-4, GPT-4o-mini), Anthropic Claude (Sonnet, Opus), Google Gemini (Pro, Flash), and more. You can switch between models based on your needs. Premium tier gives you separate pools for Flash and Advanced models."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. WeaveAI is privacy-first by design. Your API keys and chat history are stored locally in your browser using Chrome's secure storage (encrypted). We don't collect or store your conversations or page content. When you use BYOK (Bring Your Own Key), your data goes directly to the AI provider, never through our servers."
    },
    {
      question: "Can I use my own API keys?",
      answer: "Yes! All plans support BYOK (Bring Your Own Key). If you already have OpenAI, Anthropic, or Google AI API keys, you can use them for unlimited prompts during your subscription period. This is Option B in our pricing."
    },
    {
      question: "What's the difference between Option A (Managed) and Option B (BYOK)?",
      answer: "Option A (Managed): We provide the AI access. You get unlimited prompts through our API keys. Option B (BYOK): You provide your own API keys. You get unlimited prompts using your keys. Both options are available at the same price on Basic and Premium tiers."
    },
    {
      question: "How does the 48-hour free trial work?",
      answer: "Install the extension and you get 48 hours to try all features with 30 free prompts. No credit card required. You can test PDFs, multi-tab comparison, YouTube transcripts, Google Docs—everything. After the trial, choose a plan or continue with your own API keys."
    },
    {
      question: "Can I compare multiple tabs?",
      answer: "Yes! WeaveAI supports pinning up to 5 tabs simultaneously. You can ask questions like 'Compare the pricing in these 3 articles' or 'What do all these papers say about X?' The AI analyzes all pinned tabs together and gives you a comprehensive answer."
    },
    {
      question: "Does it work with PDFs?",
      answer: "Yes! WeaveAI can extract and analyze PDFs up to 500 pages. Perfect for research papers, books, reports, and documentation. Just open a PDF in Chrome and start chatting with it."
    },
    {
      question: "What about YouTube videos?",
      answer: "WeaveAI automatically extracts YouTube video transcripts (when available) and lets you chat with them. You can ask 'What are the key points?' or 'Jump to the part about X' and get exact timestamps. Great for lectures, tutorials, and long-form content."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. No questions asked. If you cancel, you'll retain access until the end of your billing period. No refunds for partial months, but you keep all the features until expiry."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a full 48-hour free trial so you can test everything before paying. Once you subscribe, we don't offer refunds for partial months. However, you can cancel anytime and keep access until the end of your billing period."
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

