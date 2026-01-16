import { GraduationCap, Briefcase, Pencil, ShoppingBag, CheckCircle } from "lucide-react";

export default function UseCases() {
  const cases = [
    {
      icon: GraduationCap,
      emoji: "🎓",
      title: "Students",
      subtitle: "Your AI Study Partner",
      description: "Write essays faster by connecting 10 sources at once. Synthesize research papers from multiple tabs. Get instant summaries for study guides without copy-pasting.",
      features: [
        "Chat with 500-page research papers",
        "Compare multiple studies side-by-side",
        "Get answers with exact page citations",
        "Extract key findings in seconds"
      ]
    },
    {
      icon: Briefcase,
      emoji: "💼",
      title: "Professionals",
      subtitle: "Work Smarter, Not Harder",
      description: "Compare competitor websites and products across multiple tabs. Analyze long documents in seconds. Extract key insights from PDFs and cross-reference data across multiple studies.",
      features: [
        "Summarize lengthy documents instantly",
        "Compare competitor analyses",
        "Extract key insights from PDFs",
        "Cross-reference data across studies"
      ]
    },
    {
      icon: ShoppingBag,
      emoji: "🛒",
      title: "Shoppers",
      subtitle: "Compare Products Instantly",
      description: "Compare product specs across Amazon, YouTube, and Tech Blogs instantly. Get AI-powered recommendations by connecting multiple product pages. Find the best deals quickly without switching tabs.",
      features: [
        "Compare pricing and features across 3+ tools",
        "Get AI-powered recommendations",
        "Find the best deals quickly",
        "No more switching tabs"
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-24" id="use-cases">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Built for how you work
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether you're learning, creating, or researching — WeaveAI adapts to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="text-5xl mb-4">{useCase.emoji}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-primary-600 font-semibold mb-4">{useCase.subtitle}</p>
              <p className="text-slate-600 mb-6">{useCase.description}</p>
              <ul className="space-y-3">
                {useCase.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional use case examples */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Also perfect for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Researchers", "Legal Research", "Medical Literature", "Technical Documentation", "News Analysis", "Academic Papers"].map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-600/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

