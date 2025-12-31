import Link from "next/link";
import { FileText, Youtube, Globe, Zap, Lock, Layers, Brain, Download, ArrowRight } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: FileText,
      title: "PDF Extraction",
      description: "Chat with PDFs up to 500 pages",
      details: [
        "Extract text from entire books and research papers",
        "Ask questions about specific sections",
        "Get answers with exact page citations",
        "Works with scanned PDFs (OCR support)"
      ]
    },
    {
      icon: Youtube,
      title: "YouTube Transcripts",
      description: "Analyze video content instantly",
      details: [
        "Automatic transcript extraction",
        "Get exact timestamps for key moments",
        "Summarize hour-long videos in seconds",
        "Find specific topics within videos"
      ]
    },
    {
      icon: Globe,
      title: "Web Page Analysis",
      description: "Chat with any webpage",
      details: [
        "Clean text extraction from articles",
        "Works with news sites, blogs, documentation",
        "Bypass paywalls (for content you can access)",
        "Smart content detection"
      ]
    },
    {
      icon: Layers,
      title: "Multi-Tab Comparison",
      description: "Compare up to 5 tabs simultaneously",
      details: [
        "Pin multiple tabs for analysis",
        "Ask questions across all pinned content",
        "Compare articles, research papers, or reviews",
        "Synthesize insights from multiple sources"
      ]
    },
    {
      icon: Download,
      title: "Google Docs & Slides",
      description: "Native Drive API integration",
      details: [
        "OAuth 2.0 secure authentication",
        "Read-only access to your documents",
        "Export and analyze Slides as PDFs",
        "One-time login, seamless token caching"
      ]
    },
    {
      icon: Brain,
      title: "7 AI Models",
      description: "Choose the right model for your task",
      details: [
        "OpenAI: GPT-4, GPT-4o-mini",
        "Anthropic: Claude Sonnet, Claude Opus",
        "Google: Gemini Pro, Gemini Flash",
        "Switch models anytime"
      ]
    },
    {
      icon: Zap,
      title: "2M Token Context",
      description: "Handle massive documents",
      details: [
        "Process entire books in one go",
        "No chunking or splitting required",
        "Maintain full context across conversations",
        "Advanced token management"
      ]
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays yours",
      details: [
        "Local storage for API keys",
        "No conversation tracking",
        "Content read only when you send a prompt",
        "BYOK: Direct to AI provider, not our servers"
      ]
    }
  ];

  const capabilities = [
    {
      title: "Content Types Supported",
      items: [
        "📄 Web pages (articles, blogs, docs)",
        "📕 PDFs (up to 500 pages)",
        "🎥 YouTube videos (with transcripts)",
        "📝 Google Docs",
        "📊 Google Slides",
        "📰 News articles",
        "📚 Research papers",
        "🔧 Technical documentation"
      ]
    },
    {
      title: "Use Cases",
      items: [
        "🎓 Academic research",
        "💼 Business analysis",
        "✍️ Content creation",
        "📖 Learning & studying",
        "🔍 Market research",
        "⚖️ Legal document review",
        "🏥 Medical literature review",
        "🛒 Product comparison"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Powerful features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800"> smarter browsing</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Everything you need to transform how you consume content on the web.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-primary-100 p-3">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-primary-600 font-semibold mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              What can you do with WeaveAI?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{cap.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {cap.items.map((item, i) => (
                    <div key={i} className="text-sm text-slate-700">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Ready to experience these features?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start your free 48-hour trial today. No credit card required.
          </p>
          <div className="mt-8">
            <Link
              href="https://chrome.google.com/webstore"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-500 transition-all hover:scale-105"
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

