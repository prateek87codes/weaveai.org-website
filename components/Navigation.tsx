"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Use Cases", href: "/#use-cases" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img
                className="h-10 w-10"
                src="/logo.png"
                alt="WeaveAI"
              />
              <span className="text-2xl font-bold text-slate-900">
                Weave<span className="text-primary-600">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-slate-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Link
              href="/#pricing"
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-primary-600 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="https://chrome.google.com/webstore"
              target="_blank"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-all hover:scale-105"
            >
              Add to Chrome
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-slate-200 pt-4 space-y-2">
                <Link
                  href="/#pricing"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  className="block rounded-lg bg-primary-600 px-3 py-2 text-base font-semibold text-white text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Add to Chrome
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

