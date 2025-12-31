export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: December 25, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By installing and using WeaveAI ("the Extension"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Extension.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              WeaveAI is a Chrome extension that enables users to chat with web pages, PDFs, YouTube videos, and Google Docs using AI language models (GPT-4, Claude, Gemini, etc.).
            </p>
            <p className="text-slate-700 leading-relaxed">
              The Extension is provided on a freemium basis: a free trial followed by optional paid subscription plans.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1 Registration</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              You must provide a valid email address to create an account. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2 Account Security</h3>
            <p className="text-slate-700 leading-relaxed">
              You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Subscription and Payment</h2>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Free Trial</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              New users receive a 48-hour free trial with 30 prompts. No credit card required. Trial terms may change at our discretion.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Paid Subscriptions</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Paid plans (Basic: $4.99/month, Premium: $14.99/month) grant unlimited prompts for the subscription period. Subscriptions auto-renew monthly unless canceled.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.3 Payment Processing</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Payments are processed securely through Stripe. By subscribing, you authorize recurring charges to your payment method.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.4 Cancellation and Refunds</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>You may cancel your subscription at any time from your account settings</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>No refunds for partial months or unused prompts</li>
              <li>Trial period: No refunds as no payment was made</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Bring Your Own Key (BYOK)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Users may provide their own API keys for OpenAI, Anthropic, or Google AI:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>API keys are stored locally in your browser (not on our servers)</li>
              <li>You are responsible for all charges incurred with your API keys</li>
              <li>We are not liable for unauthorized API key usage</li>
              <li>BYOK users must maintain an active subscription (Basic or Premium)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Acceptable Use</h2>
            <p className="text-slate-700 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Use the Extension for illegal activities</li>
              <li>Violate any third-party rights (copyright, trademark, privacy)</li>
              <li>Reverse engineer, decompile, or modify the Extension</li>
              <li>Resell or redistribute the Extension</li>
              <li>Use automated scripts to abuse the service</li>
              <li>Bypass usage limits or subscription requirements</li>
              <li>Use the Extension to generate spam or harmful content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">7.1 Your Content</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              You retain all rights to content you input into the Extension. We do not store or claim ownership of your conversations or analyzed content.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">7.2 Our Content</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Extension, including its code, design, and branding, is owned by WeaveAI and protected by copyright and trademark laws.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">7.3 Third-Party Content</h3>
            <p className="text-slate-700 leading-relaxed">
              You are responsible for ensuring you have the right to analyze third-party content (web pages, PDFs, etc.). We are not liable for copyright infringement claims.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. AI Provider Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              When using the Extension, you are also subject to the terms of service of the AI providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><a href="https://openai.com/policies/terms-of-use" className="text-primary-600 hover:text-primary-700">OpenAI Terms</a></li>
              <li><a href="https://www.anthropic.com/legal/terms" className="text-primary-600 hover:text-primary-700">Anthropic Terms</a></li>
              <li><a href="https://policies.google.com/terms" className="text-primary-600 hover:text-primary-700">Google Terms</a></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Disclaimers and Limitations</h2>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">9.1 No Warranty</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              THE EXTENSION IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE ACCURACY, RELIABILITY, OR AVAILABILITY.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">9.2 AI Limitations</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              AI models may produce inaccurate, incomplete, or misleading responses. You are responsible for verifying AI outputs before relying on them.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">9.3 Third-Party Services</h3>
            <p className="text-slate-700 leading-relaxed">
              We rely on third-party services (OpenAI, Anthropic, Google, Stripe, Supabase). We are not liable for their downtime, errors, or policy changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WEAVEAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE EXTENSION. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE LAST 12 MONTHS ($179.88 maximum).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Your use of the Extension is also governed by our <a href="/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Violation of these Terms</li>
              <li>Fraudulent activity</li>
              <li>Non-payment</li>
              <li>Abuse of the service</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              Upon termination, you lose access to the Extension and any associated data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update these Terms from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact</h2>
            <p className="text-slate-700 leading-relaxed">
              For questions about these Terms:
            </p>
            <ul className="list-none space-y-2 text-slate-700 mt-4">
              <li><strong>Email:</strong> <a href="mailto:legal@weaveai.org" className="text-primary-600 hover:text-primary-700">legal@weaveai.org</a></li>
              <li><strong>Support:</strong> <a href="mailto:support@weaveai.org" className="text-primary-600 hover:text-primary-700">support@weaveai.org</a></li>
              <li><strong>Website:</strong> <a href="https://weaveai.org" className="text-primary-600 hover:text-primary-700">weaveai.org</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

