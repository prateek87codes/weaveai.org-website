export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: December 25, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              WeaveAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">TL;DR:</strong> We don't collect or store your conversations, page content, or browsing history. Your API keys stay local. We only collect minimal anonymous usage data to improve the extension.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Email address:</strong> Required for account creation and subscription management</li>
              <li><strong>Payment information:</strong> Processed securely through Stripe (we never see your card details)</li>
              <li><strong>API keys (optional):</strong> Stored locally in your browser's secure storage, encrypted</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Your conversations with the AI</li>
              <li>Web page content you analyze</li>
              <li>PDF content</li>
              <li>YouTube transcripts</li>
              <li>Your browsing history</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Anonymous Usage Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Number of prompts used (for subscription limits)</li>
              <li>Feature usage statistics (which features you use)</li>
              <li>Error reports (to fix bugs)</li>
              <li>Extension version and browser type</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Account management:</strong> Create and manage your account</li>
              <li><strong>Subscription tracking:</strong> Monitor prompt usage and enforce tier limits</li>
              <li><strong>Payment processing:</strong> Process subscription payments via Stripe</li>
              <li><strong>Customer support:</strong> Respond to your inquiries</li>
              <li><strong>Product improvement:</strong> Analyze usage patterns to improve features</li>
              <li><strong>Security:</strong> Detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Storage and Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Local storage:</strong> API keys and chat history are stored locally in Chrome's secure storage</li>
              <li><strong>Encryption:</strong> All data in transit uses HTTPS encryption</li>
              <li><strong>Cloud storage:</strong> Email, subscription data stored on Supabase (encrypted at rest)</li>
              <li><strong>BYOK:</strong> When using your own API keys, data goes directly to AI providers (OpenAI, Anthropic, Google)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Stripe:</strong> Payment processing (see <a href="https://stripe.com/privacy" className="text-primary-600 hover:text-primary-700">Stripe Privacy Policy</a>)</li>
              <li><strong>Supabase:</strong> Database and authentication (see <a href="https://supabase.com/privacy" className="text-primary-600 hover:text-primary-700">Supabase Privacy Policy</a>)</li>
              <li><strong>AI Providers:</strong> OpenAI, Anthropic, Google (when using managed API access)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Correction:</strong> Update your email or account information</li>
              <li><strong>Export:</strong> Export your chat history (stored locally)</li>
              <li><strong>Opt-out:</strong> Disable usage statistics in Settings</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@weaveai.org" className="text-primary-600 hover:text-primary-700">privacy@weaveai.org</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Chat history:</strong> Stored locally for 24 hours (auto-deleted)</li>
              <li><strong>Account data:</strong> Retained while your account is active</li>
              <li><strong>Usage data:</strong> Aggregated and anonymized after 90 days</li>
              <li><strong>Deleted accounts:</strong> All data removed within 30 days</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Google OAuth and Drive API</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              WeaveAI uses Google OAuth for authenticating with Google Docs and Slides:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Scope:</strong> Read-only access to your Google Drive files</li>
              <li><strong>Token storage:</strong> OAuth tokens cached locally, expire after 1 hour</li>
              <li><strong>Data usage:</strong> We only read documents you explicitly chat with</li>
              <li><strong>No upload:</strong> We never write to or modify your Google Drive files</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              See Google's <a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a> for more information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              WeaveAI is not intended for users under 13 years of age. We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of WeaveAI constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              For privacy-related questions or concerns:
            </p>
            <ul className="list-none space-y-2 text-slate-700 mt-4">
              <li><strong>Email:</strong> <a href="mailto:privacy@weaveai.org" className="text-primary-600 hover:text-primary-700">privacy@weaveai.org</a></li>
              <li><strong>Support:</strong> <a href="mailto:support@weaveai.org" className="text-primary-600 hover:text-primary-700">support@weaveai.org</a></li>
              <li><strong>Website:</strong> <a href="https://weaveai.org" className="text-primary-600 hover:text-primary-700">weaveai.org</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

