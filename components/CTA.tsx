import Link from "next/link";
import { ArrowRight, Chrome } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to transform how you browse?
        </h2>
        <p className="mt-6 text-xl leading-8 text-primary-100">
          Join hundreds of users who are already chatting with webpages, PDFs, and videos using AI.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="group rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-lg hover:bg-primary-50 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Chrome className="h-5 w-5" />
            Add to Chrome - Free
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/pricing"
            className="text-lg font-semibold leading-6 text-white flex items-center gap-2 hover:text-primary-100 transition-colors px-8 py-4"
          >
            View pricing <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-primary-200">
          ⚡ 50 free prompts • No credit card required • Privacy-first
        </p>
      </div>
    </section>
  );
}

