import Link from "next/link";
import { ArrowRight, Chrome } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-24">
      {/* Subtle woven pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #0d9488 0px, #0d9488 2px, transparent 2px, transparent 10px), repeating-linear-gradient(-45deg, #d4a574 0px, #d4a574 2px, transparent 2px, transparent 10px)',
          backgroundSize: '20px 20px'
        }} 
      />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Social proof badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm text-primary-700 ring-1 ring-primary-600/10 animate-fade-in">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse" />
            100+ users chatting with webpages this week
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl animate-slide-up">
            Stop reading.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Start asking.
            </span>
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto animate-slide-up">
            Chat with any webpage, PDF, or YouTube video using AI.
            Get instant answers from <span className="font-semibold text-slate-900">500-page documents</span>.
            Compare <span className="font-semibold text-slate-900">multiple tabs</span> in seconds.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link
              href="https://chrome.google.com/webstore"
              target="_blank"
              className="group rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Chrome className="h-5 w-5" />
              Add to Chrome - Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="text-lg font-semibold leading-6 text-slate-900 flex items-center gap-2 hover:text-primary-600 transition-colors px-8 py-4"
            >
              Watch demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <p className="mt-8 text-sm text-slate-500">
            ⚡ 48-hour free trial • 30 free prompts • No credit card required
          </p>
        </div>
        
        {/* Hero visual */}
        <div className="mt-16 relative animate-fade-in" id="demo">
          <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded px-4 py-1.5 text-sm text-slate-500">
                weaveai.org
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-slate-50 p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💬</div>
                <p className="text-slate-600 text-lg">Demo video/screenshot goes here</p>
                <p className="text-slate-500 text-sm mt-2">Add your extension demo screenshot to /public/demo.png</p>
              </div>
            </div>
          </div>
          
          {/* Floating feature badges */}
          <div className="hidden lg:block">
            <div className="absolute -left-8 top-1/4 bg-white rounded-lg shadow-lg p-4 animate-pulse-slow">
              <p className="text-sm font-semibold text-slate-900">✅ 500-page PDFs</p>
            </div>
            <div className="absolute -right-8 top-1/3 bg-white rounded-lg shadow-lg p-4 animate-pulse-slow" style={{animationDelay: '1s'}}>
              <p className="text-sm font-semibold text-slate-900">🎥 YouTube transcripts</p>
            </div>
            <div className="absolute -left-8 bottom-1/4 bg-white rounded-lg shadow-lg p-4 animate-pulse-slow" style={{animationDelay: '2s'}}>
              <p className="text-sm font-semibold text-slate-900">📊 5-tab comparison</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

