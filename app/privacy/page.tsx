export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: March 8, 2026</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              WeaveAI LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share your information when you use our Chrome extension and related services. This policy covers all data collected through our Chrome extension, website, and backend services.
            </p>
            <p className="text-slate-700 leading-relaxed">
              By installing or using the WeaveAI Chrome extension, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Account and Authentication Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Email address:</strong> Collected when you create an account. Stored in our Supabase database and used for authentication, account management, and subscription tracking.</li>
              <li><strong>Authentication tokens:</strong> Session tokens issued by Supabase Auth are stored locally in Chrome's secure storage to keep you logged in. These expire periodically and are refreshed automatically.</li>
              <li><strong>Google OAuth tokens (optional):</strong> If you use Google Docs or Slides integration, OAuth tokens are cached locally in your browser for up to 1 hour to enable read-only access to files you explicitly choose to chat with. These tokens are never sent to our servers.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Usage and Activity Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Prompt count:</strong> The number of AI prompts you send is recorded in our database to enforce subscription tier limits (trial, basic, or premium).</li>
              <li><strong>Subscription status:</strong> Your current subscription tier, plan type, and remaining prompt allowance are stored to manage access to features.</li>
              <li><strong>Feature usage statistics:</strong> Anonymous data about which extension features are used (e.g., multi-tab mode, PDF mode) to help us improve the product.</li>
              <li><strong>Error reports:</strong> Crash reports and error logs (without personal content) to help us diagnose and fix bugs.</li>
              <li><strong>Extension version and browser type:</strong> Collected to ensure compatibility and support.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Payment Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Billing details:</strong> Handled entirely by Stripe. We never see or store your credit card number, CVV, or full billing address. We only receive a Stripe customer ID and subscription status from Stripe after payment.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Content Processed by the Extension (Not Stored by Us)</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              The following content is processed locally in your browser and/or transmitted to AI providers to generate responses, but is <strong>not stored on our servers</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Web page content:</strong> Text content from tabs you select for analysis is extracted locally and included in prompts sent to AI providers.</li>
              <li><strong>PDF content:</strong> Text extracted from PDFs you choose to analyze, included in prompts sent to AI providers.</li>
              <li><strong>YouTube transcripts:</strong> Transcripts from YouTube videos you select, included in prompts sent to AI providers.</li>
              <li><strong>Your chat messages and AI responses:</strong> Stored locally in your browser for up to 24 hours and then automatically deleted. Never stored on our servers.</li>
              <li><strong>Your browsing history:</strong> Not collected. We only access tabs you explicitly select.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">5. API Keys (Optional — BYOK Mode)</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>If you use Bring Your Own Key (BYOK) mode, your API keys are stored locally in Chrome's encrypted storage. They are never transmitted to our servers.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Account management:</strong> Your email and authentication tokens are used to create and maintain your account.</li>
              <li><strong>Subscription and usage enforcement:</strong> Prompt counts and subscription status are used to enforce trial limits and paid plan allowances.</li>
              <li><strong>Payment processing:</strong> Your email is shared with Stripe to create a billing customer record and process subscription payments.</li>
              <li><strong>AI response generation (Managed API mode):</strong> When you use WeaveAI's managed API (not BYOK), the content you select (web pages, PDFs, YouTube transcripts) and your chat messages are sent to Google's Gemini API to generate AI responses. This content is processed according to Google's API data use policies.</li>
              <li><strong>Customer support:</strong> Your email may be used to respond to support requests.</li>
              <li><strong>Product improvement:</strong> Anonymous, aggregated usage statistics help us understand feature adoption and improve the extension.</li>
              <li><strong>Security and fraud prevention:</strong> Usage patterns may be monitored to detect abuse or unauthorized access.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing — All Third Parties</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell your personal data. We share data only with the following third parties, strictly as necessary to operate the service:
            </p>

            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Supabase (Database &amp; Authentication)</h3>
                <p className="text-slate-700 text-sm mb-2"><strong>Data shared:</strong> Email address, authentication tokens, prompt counts, subscription status, usage statistics.</p>
                <p className="text-slate-700 text-sm mb-2"><strong>Purpose:</strong> Secure user authentication and storing account/subscription data.</p>
                <p className="text-slate-700 text-sm mb-2"><strong>Storage location:</strong> US and EU regions (data encrypted at rest and in transit).</p>
                <p className="text-slate-700 text-sm"><a href="https://supabase.com/privacy" className="text-primary-600 hover:text-primary-700">Supabase Privacy Policy</a></p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Stripe (Payment Processing)</h3>
                <p className="text-slate-700 text-sm mb-2"><strong>Data shared:</strong> Email address, subscription plan details. Payment card information is entered directly into Stripe's secure forms and never passes through our systems.</p>
                <p className="text-slate-700 text-sm mb-2"><strong>Purpose:</strong> Processing subscription payments and managing billing.</p>
                <p className="text-slate-700 text-sm"><a href="https://stripe.com/privacy" className="text-primary-600 hover:text-primary-700">Stripe Privacy Policy</a></p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Google Gemini API (AI Provider — Managed API Mode Only)</h3>
                <p className="text-slate-700 text-sm mb-2"><strong>Data shared:</strong> The content of web pages, PDFs, and YouTube videos you select, along with your chat messages, are sent to Google's Gemini API to generate AI responses. This applies only when using WeaveAI's managed API (not BYOK mode).</p>
                <p className="text-slate-700 text-sm mb-2"><strong>Purpose:</strong> Generating AI responses to your queries.</p>
                <p className="text-slate-700 text-sm mb-2"><strong>Note:</strong> Google may use API data in accordance with their API terms. We recommend reviewing Google's policy if you handle sensitive information.</p>
                <p className="text-slate-700 text-sm"><a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700">Google Privacy Policy</a> | <a href="https://ai.google.dev/terms" className="text-primary-600 hover:text-primary-700">Gemini API Terms</a></p>
              </div>

              <div className="border border-slate-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">OpenAI / Anthropic (BYOK Mode Only)</h3>
                <p className="text-slate-700 text-sm mb-2"><strong>Data shared:</strong> If you choose BYOK mode with your own OpenAI or Anthropic API key, your selected content and chat messages are sent directly from your browser to those providers using your key. WeaveAI does not intermediate or store this data.</p>
                <p className="text-slate-700 text-sm"><a href="https://openai.com/policies/privacy-policy" className="text-primary-600 hover:text-primary-700">OpenAI Privacy Policy</a> | <a href="https://www.anthropic.com/legal/privacy" className="text-primary-600 hover:text-primary-700">Anthropic Privacy Policy</a></p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mt-6">
              We do not share your data with any other third parties, advertising networks, data brokers, or analytics companies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Storage and Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Local storage:</strong> API keys, OAuth tokens, and chat history are stored locally in Chrome's secure, encrypted extension storage and never leave your device (except as described above).</li>
              <li><strong>Transit encryption:</strong> All network requests use HTTPS/TLS encryption.</li>
              <li><strong>Cloud storage:</strong> Email address, subscription data, and usage counts are stored on Supabase with encryption at rest.</li>
              <li><strong>Access controls:</strong> Our Supabase database uses row-level security (RLS) so each user can only access their own data.</li>
              <li><strong>No conversation storage:</strong> Your chat messages and AI responses are never stored on our servers. They exist only in your browser's local storage.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Chat history:</strong> Stored locally in your browser for 24 hours and then automatically deleted.</li>
              <li><strong>Account data (email, subscription):</strong> Retained while your account is active.</li>
              <li><strong>Usage data (prompt counts):</strong> Retained for account management; aggregated and anonymized after 90 days of account deletion.</li>
              <li><strong>Deleted accounts:</strong> All personal data is removed within 30 days of an account deletion request.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Google OAuth and Drive API</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              WeaveAI uses Google OAuth to enable read-only access to Google Docs and Slides that you explicitly choose to analyze:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Scope requested:</strong> Read-only access to Google Drive files (<code>drive.readonly</code>).</li>
              <li><strong>Token storage:</strong> OAuth tokens are cached locally in Chrome's secure storage and expire after 1 hour. They are never sent to our servers.</li>
              <li><strong>Data usage:</strong> Document content is read only when you explicitly initiate a chat with that document. It is sent to Google Gemini API for response generation and is not stored on our servers.</li>
              <li><strong>No write access:</strong> We never create, modify, or delete your Google Drive files.</li>
              <li><strong>WeaveAI's use of Google user data is limited to providing the in-product feature you explicitly request and does not include transfer to third parties for advertising or unrelated purposes.</strong></li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              See Google's <a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a> for more information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Deletion:</strong> Request deletion of your account and all associated personal data.</li>
              <li><strong>Correction:</strong> Update your email or account information via the extension's Settings page.</li>
              <li><strong>Portability:</strong> Export your locally stored chat history at any time from within the extension.</li>
              <li><strong>Opt-out:</strong> Disable anonymous usage statistics collection in the extension's Settings page.</li>
              <li><strong>Withdraw consent:</strong> Revoke Google OAuth access at any time via your <a href="https://myaccount.google.com/permissions" className="text-primary-600 hover:text-primary-700">Google Account permissions page</a>.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:reachweaveai@gmail.com" className="text-primary-600 hover:text-primary-700">reachweaveai@gmail.com</a>. We will respond within 30 days.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              WeaveAI is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Material changes will be communicated via the extension or by email. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of WeaveAI after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              For privacy-related questions, data requests, or concerns:
            </p>
            <ul className="list-none space-y-2 text-slate-700 mt-4">
              <li><strong>Email:</strong> <a href="mailto:reachweaveai@gmail.com" className="text-primary-600 hover:text-primary-700">reachweaveai@gmail.com</a></li>
              <li><strong>Website:</strong> <a href="https://weaveai.org" className="text-primary-600 hover:text-primary-700">weaveai.org</a></li>
              <li><strong>Business address:</strong> WeaveAI LLC, 2108 N St STE N, Sacramento, CA 95816, US</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

