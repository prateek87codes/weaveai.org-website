"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  { src: "/screenshot-article.jpg", alt: "Article Summary - Get instant insights from any article" },
  { src: "/screenshot-multitab.jpg", alt: "Multi-Tab Review - Compare multiple sources" },
  { src: "/screenshot-opening.jpg", alt: "Opening Interface - Clean sidebar experience" },
  { src: "/screenshot-subscriptions.jpg", alt: "Subscription Options - Flexible pricing" },
];

export default function FeatureDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">HOW IT WORKS</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Chat & browse side by side
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Most AI extensions force you to copy-paste context or chat with one page at a time. WeaveAI connects the dots.
          </p>
        </div>
        
        {/* Screenshot Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-xl shadow-2xl bg-slate-50 overflow-hidden">
            {/* Single Image Display */}
            <div className="relative w-full">
              <img
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                className="w-full h-auto object-contain"
              />
              
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700" />
              </button>
              
              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-6 w-6 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-600 w-8"
                    : "bg-slate-300 w-2 hover:bg-slate-400"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
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
