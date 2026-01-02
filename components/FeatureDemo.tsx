import { MessageSquare, FileText, ExternalLink } from "lucide-react";

export default function FeatureDemo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">HOW IT WORKS</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Chat & browse side by side
          </p>
          <p className="mt-4 text-lg text-slate-600">
            No copy-pasting. No switching tabs. Just ask questions naturally.
          </p>
        </div>
        
        {/* Side-by-side demo */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Browser view */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ExternalLink className="h-5 w-5 text-primary-600" />
              <h3 className="font-semibold text-lg text-slate-900">Any webpage</h3>
            </div>
            <div className="bg-slate-100 rounded-t-lg p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded px-4 py-1 text-sm text-slate-500">
                https://research-paper.com/study...
              </div>
            </div>
            <div className="border-2 border-slate-200 rounded-b-lg overflow-hidden bg-white">
              <div className="p-6 space-y-3">
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-5/6" />
                <div className="h-4 bg-slate-200 rounded w-4/6" />
                <div className="h-4 bg-primary-200 rounded w-full mt-4" />
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-3/4" />
              </div>
            </div>
          </div>
          
          {/* Chat view */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-5 w-5 text-primary-600" />
              <h3 className="font-semibold text-lg text-slate-900">AI understands it</h3>
            </div>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-t-lg p-4 text-white font-semibold flex items-center gap-2">
              <img src="/Logo.png" alt="WeaveAI" className="h-6 w-6" />
              WeaveAI Chat
            </div>
            <div className="border-2 border-primary-200 rounded-b-lg p-6 bg-white space-y-4">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-xs text-slate-500 mb-1">You asked:</p>
                <p className="font-medium text-slate-900">"What are the main findings of this study?"</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                <p className="text-xs text-primary-700 font-medium mb-2">AI Response:</p>
                <p className="text-slate-800 leading-relaxed">
                  The study found three key results: 1) Sample size increased effectiveness by 40%, 
                  2) Methodology improvements led to higher accuracy, and 3) Long-term effects were significant...
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FileText className="h-4 w-4" />
                <span>Sources cited with exact page numbers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-semibold text-slate-900 mb-2">Instant context</h4>
            <p className="text-sm text-slate-600">AI reads the entire page automatically</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-semibold text-slate-900 mb-2">Precise answers</h4>
            <p className="text-sm text-slate-600">Get exact quotes and citations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="font-semibold text-slate-900 mb-2">Privacy first</h4>
            <p className="text-sm text-slate-600">Your data stays in your browser</p>
          </div>
        </div>
      </div>
    </section>
  );
}

