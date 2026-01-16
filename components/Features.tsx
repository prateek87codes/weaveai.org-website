import { FileText, Youtube, Globe, Zap, Lock, Layers, Brain, Download, Check, File, Newspaper, BookOpen, Wrench, GraduationCap, Briefcase, Pencil, Book, Search, Scale, Hospital, ShoppingCart, Sidebar } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: "PDF Extraction",
      description: "Chat with PDFs up to 500 pages",
      details: [
        "Extract text from books and research papers",
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
        "Summarize news articles in seconds",
        "Smart content detection"
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
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays yours",
      details: [
        "Local storage for API keys",
        "No conversation tracking",
        "Content read only when you send a prompt",
        "BYOK: Direct to AI provider, not our servers"
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
      icon: Sidebar,
      title: "Zero Clutter Experience",
      description: "Stays hidden until you need it - no intrusions",
      details: [
        "Completely hidden in sidebar until you open it",
        "Never injects buttons or popups into websites",
        "No floating icons or intrusive UI elements",
        "Get clutter free browsing experience"
      ]
    },
    {
      icon: Layers,
      title: "Multi-Tab Intelligence",
      description: "Compare multiple tabs simultaneously (The Weave Advantage)",
      details: [
        "Chat with multiple tabs at once",
        "Compare pricing and features across 3+ tabs",
        "Synthesize arguments from multiple articles",
        "Find contradictions between PDFs and YouTube videos"
      ]
    },
    {
      icon: Brain,
      title: "BYOK: Model Freedom",
      description: "Unique BYOK option - unlimited prompts for just $4.99/month",
      details: [
        "Only extension offering Bring Your Own Key (BYOK)",
        "Use any model: GPT-4o, Claude, Gemini, Perplexity, Grok, Llama, Deepseek",
        "Unlimited prompts with your own API key",
        "Unbeatable value: $4.99/month for unlimited AI power"
      ]
    }
  ];

  const capabilities = [
    {
      title: "Content Types Supported",
      headerIcon: Layers,
      items: [
        { icon: Globe, text: "Web pages (articles, blogs, docs)" },
        { icon: FileText, text: "PDFs (up to 500 pages)" },
        { icon: Youtube, text: "YouTube videos (with transcripts)" },
        { icon: File, text: "Google Docs" },
        { icon: Download, text: "Google Slides" },
        { icon: Newspaper, text: "News articles" },
        { icon: BookOpen, text: "Research papers" },
        { icon: Wrench, text: "Technical documentation" }
      ]
    },
    {
      title: "Use Cases",
      headerIcon: Brain,
      items: [
        { icon: GraduationCap, text: "Academic research" },
        { icon: Briefcase, text: "Business analysis" },
        { icon: Pencil, text: "Content creation" },
        { icon: Book, text: "Learning & studying" },
        { icon: Search, text: "Market research" },
        { icon: Scale, text: "Legal document review" },
        { icon: Hospital, text: "Medical literature review" },
        { icon: ShoppingCart, text: "Product comparison" }
      ]
    }
  ];

  return (
    <section className="bg-white py-24" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Powerful features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800"> smarter browsing</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to transform how you consume content on the web.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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
                <ul className="space-y-2.5">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed flex-1">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Capabilities Section */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 lg:p-12 scroll-mt-20 border border-slate-200 shadow-sm" id="what-can-you-do">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              What can you do with WeaveAI?
            </h3>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
              Explore the content types and use cases that make WeaveAI powerful
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {capabilities.map((cap, idx) => {
              const HeaderIcon = cap.headerIcon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 lg:p-8 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    {HeaderIcon && (
                      <div className="rounded-lg bg-primary-100 p-2.5">
                        <HeaderIcon className="h-5 w-5 text-primary-600" />
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-slate-900">{cap.title}</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cap.items.map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-primary-50 transition-colors group">
                          <div className="rounded-md bg-primary-50 group-hover:bg-primary-100 p-1.5 flex-shrink-0 transition-colors">
                            <ItemIcon className="h-4 w-4 text-primary-600" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium leading-snug">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
