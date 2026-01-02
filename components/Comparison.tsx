import { Check, X, AlertCircle } from "lucide-react";

export default function Comparison() {
  const features = [
    { name: "Works directly in browser", weaveai: true, chatgpt: false, summarizers: "partial" },
    { name: "500-page PDFs", weaveai: true, chatgpt: false, summarizers: false },
    { name: "Multi-tab comparison (5 tabs)", weaveai: true, chatgpt: false, summarizers: false },
    { name: "YouTube transcripts", weaveai: true, chatgpt: false, summarizers: false },
    { name: "Google Docs integration", weaveai: true, chatgpt: false, summarizers: false },
    { name: "2M token context window", weaveai: true, chatgpt: "partial", summarizers: false },
    { name: "Privacy-first (local storage)", weaveai: true, chatgpt: false, summarizers: "partial" },
    { name: "7 AI models (GPT-4, Claude, Gemini)", weaveai: true, chatgpt: "partial", summarizers: false },
  ];

  const renderIcon = (value: boolean | string) => {
    if (value === true) return <Check className="h-6 w-6 text-green-600" />;
    if (value === false) return <X className="h-6 w-6 text-red-400" />;
    return <AlertCircle className="h-6 w-6 text-yellow-500" />;
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Why WeaveAI?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            More powerful than ChatGPT copy-paste. Smarter than basic summarizers.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-900">Feature</th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <img src="/logo.png" alt="WeaveAI" className="h-8 w-8 mb-2" />
                    <span className="text-sm font-semibold text-primary-600">WeaveAI</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-slate-500">ChatGPT</th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-slate-500">Basic<br/>Summarizers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((feature, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-4 px-6 text-slate-700 text-sm">{feature.name}</td>
                  <td className="py-4 px-6 text-center">{renderIcon(feature.weaveai)}</td>
                  <td className="py-4 px-6 text-center">{renderIcon(feature.chatgpt)}</td>
                  <td className="py-4 px-6 text-center">{renderIcon(feature.summarizers)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex items-start gap-2 text-sm text-slate-500">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <p>Partial support = Limited functionality or requires manual workarounds</p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-500 transition-all hover:scale-105"
          >
            Try WeaveAI Free for 48 Hours
          </a>
        </div>
      </div>
    </section>
  );
}

