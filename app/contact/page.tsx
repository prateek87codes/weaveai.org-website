"use client";

import { useEffect, useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setShowSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 overflow-hidden">
      {/* Subtle woven pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #0d9488 0px, #0d9488 2px, transparent 2px, transparent 10px), repeating-linear-gradient(-45deg, #d4a574 0px, #d4a574 2px, transparent 2px, transparent 10px)',
          backgroundSize: '20px 20px'
        }} 
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Have a question, feedback, or need support? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 lg:p-12">
          <form
            action="https://formsubmit.co/reachweaveai@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission from WeaveAI Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://weaveai.org/contact?success=true" />
            <input type="hidden" name="_template" value="box" />

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full rounded-lg border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full rounded-lg border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="block w-full rounded-lg border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 resize-none"
                placeholder="Tell us about your question, feedback, or how we can help..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Success Message (shown after form submission) */}
        {showSuccess && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-medium text-green-800">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          </div>
        )}

        {/* Alternative Contact Methods */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
            </div>
            <a
              href="mailto:reachweaveai@gmail.com"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              reachweaveai@gmail.com
            </a>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="h-6 w-6 text-primary-600" />
              <h3 className="text-lg font-semibold text-slate-900">Response Time</h3>
            </div>
            <p className="text-slate-600">
              We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
