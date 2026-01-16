import { AlertTriangle, Check, Lock, Unlock } from "lucide-react";

export default function Comparison() {
  const scenarios = [
    {
      feature: "Browser Experience",
      chatbots: "❌ Requires copy-paste. No browser integration. You manually transfer content to a separate chat window.",
      extensions: "🚨 Intrusive. Floating icons, popups on text selection, and injected buttons inside your favorite websites.",
      weaveai: "✅ Zero Clutter. Stays completely hidden in the sidebar until you need it. We never alter websites or inject buttons."
    },
    {
      feature: "Research & Synthesis",
      chatbots: "❌ Single-threaded. Can only process one conversation at a time. Cannot connect information across multiple sources.",
      extensions: "❌ Single-threaded. Can only read the current active tab. Cannot connect information across multiple sources.",
      weaveai: "✅ Multi-Tab Brain. Select multiple open tabs, PDFs, or Videos. Ask one question and get a synthesized answer citing all of them."
    },
    {
      feature: "Data Access",
      chatbots: "⚠️ Always Watching. Requires you to manually share content, but once shared, it's stored on their servers.",
      extensions: "⚠️ Always Watching. Often requires \"Read all data on all websites\" permission to inject their UI.",
      weaveai: "✅ On-Demand Only. We only process the specific tabs you check. Your banking tab stays private while you chat with your news tab."
    },
    {
      feature: "AI Models",
      chatbots: "🔒 Paywalled. GPT-4 and Claude locked behind $20/month subscriptions. Limited free tier.",
      extensions: "🔒 Paywalled. Often lock GPT-4 or Claude behind $20/month subscriptions.",
      weaveai: "✅ Open & Flexible. Includes Gemini Flash for free. Support BYOK (Bring Your Own Key) to use GPT-4o or Claude at cost price."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Why WeaveAI?
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Finally, an AI extension that respects your workflow and your privacy.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-900 bg-slate-50">Feature / Scenario</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700 bg-red-50">Standard Chatbots</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700 bg-red-50">Other AI Extensions</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-primary-700 bg-green-50">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="WeaveAI" className="h-6 w-6" />
                    <span>WeaveAI</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {scenarios.map((scenario, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-5 px-6 text-sm font-semibold text-slate-900 bg-slate-50 align-top whitespace-nowrap">
                    {scenario.feature}
                  </td>
                  <td className="py-5 px-6 text-sm text-slate-700 bg-red-50/30 align-top">
                    {scenario.chatbots}
                  </td>
                  <td className="py-5 px-6 text-sm text-slate-700 bg-red-50/30 align-top">
                    {scenario.extensions}
                  </td>
                  <td className="py-5 px-6 text-sm text-slate-800 bg-green-50/30 align-top font-medium">
                    {scenario.weaveai}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed text-center">
            Most AI extensions act like annoying salespeople—interrupting you with popups and buttons on every page. WeaveAI is your quiet research partner. We wait in the sidebar. We only read what you tell us to read. And unlike basic summarizers, we don't just shorten text—we connect ideas across your entire browser.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-500 transition-all hover:scale-105"
          >
            Try WeaveAI Free - 50 Prompts
          </a>
        </div>
      </div>
    </section>
  );
}

