export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: January 17, 2026</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By installing, accessing, or using the WeaveAI Chrome extension ("the Service" or "Extension"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you must uninstall the Extension immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-700 leading-relaxed">
              WeaveAI provides an AI-powered browser interface that enables users to synthesize information from web pages, PDFs, and videos using third-party Large Language Models (LLMs). The Service is provided on a "Freemium" basis, offering a limited free tier and paid subscription tiers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>3.1 Registration:</strong> A valid email address is required to create an account. You agree to provide accurate information.</li>
              <li><strong>3.2 Security:</strong> You are responsible for all activity under your account. WeaveAI is not liable for loss or damages arising from your failure to protect your credentials.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Subscription, Billing & Refunds (CRITICAL)</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li><strong>4.1 Free Starter Plan:</strong> New users receive an allowance of <strong>50 Smart Prompts</strong> to test the Service. This is a one-time allowance, not a recurring monthly grant. We reserve the right to modify trial terms without notice to prevent abuse.</li>
              <li><strong>4.2 Paid Subscriptions:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Essential Plan ($4.99/mo):</strong> Includes access to managed AI models (e.g., Gemini Flash) subject to a <strong>Fair Use Limit of 800 prompts per month</strong>. This limit is set to prevent automated abuse and ensure service quality for all users.</li>
                  <li><strong>BYOK Feature:</strong> Subscribers may use their own API keys for unlimited usage (subject to the third-party provider's limits).</li>
                </ul>
              </li>
              <li><strong>4.3 Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing cycle. You authorize Stripe to charge the payment method on file until you explicitly cancel.</li>
              <li><strong>4.4 Cancellation & Refund Policy:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Cancellation:</strong> You may cancel anytime via your Account Settings. Cancellation stops future billing but allows access until the end of the current cycle.</li>
                  <li><strong>No Refunds:</strong> Payments are non-refundable. <strong>We do not provide refunds for "unused" months, accidental renewals, or forgetting to cancel.</strong></li>
                  <li><strong>EU Right of Withdrawal:</strong> If you are an EU consumer, you agree that the Service begins immediately upon subscription, and you thereby acknowledge that you lose your right of withdrawal once the digital service has been fully performed or accessed.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Bring Your Own Key (BYOK) & Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              When using the "Bring Your Own Key" feature (connecting OpenAI, Anthropic, Google or other providers API keys):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>5.1 Direct Relationship:</strong> Your use of the API key creates a direct contract between you and the AI Provider. WeaveAI acts solely as a user interface.</li>
              <li><strong>5.2 Financial Responsibility:</strong> You are solely responsible for all API costs, overage charges, or rate limits imposed by the AI Provider.</li>
              <li><strong>5.3 Liability Shield:</strong> WeaveAI is <strong>not liable</strong> for any content generated, errors, or bans resulting from your use of your own API keys. You agree to indemnify WeaveAI against any claims arising from your use of third-party keys.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Acceptable Use & Fair Usage Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Use the Service for illegal activities or to generate harmful, harassing, or infringing content.</li>
              <li><strong>Automated Scraping:</strong> Use scripts, bots, or automation to bypass the 800-prompt limit or extract data from the Service. <strong>Violation of this triggers immediate account termination without refund.</strong></li>
              <li>Reverse engineer, decompile, or copy the Extension's source code.</li>
              <li>Share your account credentials with others to bypass payment.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>7.1 Your Input:</strong> You retain all rights to the queries and context you input into the Extension.</li>
              <li><strong>7.2 Our IP:</strong> The extension code, interface, "WeaveAI" name, and logo are the exclusive property of WeaveAI.</li>
              <li><strong>7.3 AI Output:</strong> Assignment of rights in AI-generated output is subject to the terms of the specific AI Provider (e.g., OpenAI or Google). WeaveAI makes no claim of ownership over your generated content.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Disclaimers and Limitations</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>8.1 "As Is" Service:</strong> The Extension is provided "AS IS" without warranties of accuracy, uptime, or reliability. We do not guarantee the accuracy of AI-generated summaries.</li>
              <li><strong>8.2 Third-Party Dependency:</strong> The Service relies on third-party APIs (Google, OpenAI, Stripe). We are not responsible for service interruptions caused by these providers.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WEAVEAI SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE LAST TWELVE (12) MONTHS.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these Terms, specifically for <strong>payment fraud, API abuse, or generating illegal content.</strong> Terminated accounts are not eligible for refunds.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms are governed by the laws of <strong>California, United States</strong>, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              For legal notices or support:
            </p>
            <ul className="list-none space-y-2 text-slate-700">
              <li><strong>WeaveAI</strong></li>
              <li><strong>Email:</strong> <a href="mailto:reachweaveai@gmail.com" className="text-primary-600 hover:text-primary-700">reachweaveai@gmail.com</a></li>
              <li><strong>Support:</strong> <a href="mailto:reachweaveai@gmail.com" className="text-primary-600 hover:text-primary-700">reachweaveai@gmail.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
