export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: January 17, 2026</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              WeaveAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension ("the Service").
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">TL;DR:</strong> We do not track your browsing history. We do not sell your data. Your conversations and API keys are stored locally on your device. We only verify your subscription status and count prompt usage to enforce limits.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Account Information:</strong> Email address (required for authentication and subscription management via Supabase).</li>
              <li><strong>Payment Information:</strong> Processed securely by Stripe. <strong>WeaveAI never accesses or stores your credit card details.</strong></li>
              <li><strong>User Content:</strong> Text prompts and questions you submit to the chat.</li>
              <li><strong>API Keys (BYOK):</strong> If you use the "Bring Your Own Key" feature, your OpenAI/Anthropic/Google keys are stored <strong>exclusively in your browser's local storage</strong> using AES encryption. They are never sent to our servers.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">B. Information Automatically Collected</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Subscription Usage:</strong> We track the number of prompts used during your billing cycle to enforce plan limits (e.g., 800 prompts/mo).</li>
              <li><strong>Anonymous Telemetry:</strong> We collect minimal, anonymized data on feature usage (e.g., "User used PDF feature") to improve the product. You can opt-out of this in Settings.</li>
              <li><strong>Extension Diagnostics:</strong> Error logs and browser version to assist with debugging.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">C. Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Your Browsing History:</strong> We strictly <strong>do not</strong> monitor or log the websites you visit.</li>
              <li><strong>Page Content:</strong> We only process the specific text of the tabs, PDFs, or Videos you <strong>explicitly select</strong> in the sidebar. We do not "read" your background tabs.</li>
              <li><strong>Chat History:</strong> We do not sync your chat history to our cloud. It lives 100% on your device.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Process Data (The "Flow")</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">A. When Using "Managed" AI (Basic/Pro Plan)</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you use our provided AI models (Gemini Flash/Pro):
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 mb-6">
              <li>Your prompt and the selected tab content are sent securely (HTTPS) to our proxy server.</li>
              <li>Our server forwards the request immediately to the AI Provider (Google Vertex AI/Gemini).</li>
              <li><strong>Zero-Retention:</strong> Our server <strong>does not log or store</strong> the text of your prompts or the content of your pages. It acts only as a pass-through authentication layer.</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">B. When Using "Bring Your Own Key" (BYOK)</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you use your own API Key:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>Your browser communicates <strong>directly</strong> with the AI Provider (OpenAI, Anthropic, Google or other providers).</li>
              <li>Your data <strong>never touches WeaveAI servers</strong>.</li>
              <li>The privacy policy of the respective AI Provider (e.g., OpenAI Enterprise Privacy) applies to that interaction.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Google User Data Policy (Limited Use)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              WeaveAI's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-primary-600 hover:text-primary-700">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Scope:</strong> We only request <code className="bg-slate-100 px-1 rounded">drive.readonly</code> access if you explicitly choose to chat with a Google Doc.</li>
              <li><strong>No Humans:</strong> No humans at WeaveAI ever read your Google Docs.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Account Data:</strong> Retained as long as your account is active. Deleted upon request.</li>
              <li><strong>Chat History:</strong> Stored locally in your browser. <strong>You have full control to clear this at any time.</strong> We do not auto-delete it unless you uninstall the extension.</li>
              <li><strong>Usage Logs:</strong> Aggregated and anonymized after 90 days.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Third-Party Processors</h2>
            <p className="text-slate-700 leading-relaxed mb-4">We use trusted third-party services for specific functions:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Stripe:</strong> Payment processing.</li>
              <li><strong>Supabase:</strong> Authentication & Database.</li>
              <li><strong>PostHog:</strong> Anonymized product analytics (Privacy-focused).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights (GDPR & CCPA)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">Under GDPR (EU) and CCPA (California), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Access/Portability:</strong> Request a copy of your account data.</li>
              <li><strong>Deletion:</strong> Request complete deletion of your account and subscription records.</li>
              <li><strong>Opt-Out:</strong> Disable anonymous usage tracking.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, email: <a href="mailto:reachweaveai@gmail.com" className="text-primary-600 hover:text-primary-700">reachweaveai@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact & Trader Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              For legal inquiries or privacy concerns:
            </p>
            <ul className="list-none space-y-2 text-slate-700">
              <li><strong>WeaveAI</strong></li>
              <li><strong>Email:</strong> <a href="mailto:reachweaveai@gmail.com" className="text-primary-600 hover:text-primary-700">reachweaveai@gmail.com</a></li>
              <li><strong>Website:</strong> <a href="https://weaveai.org" className="text-primary-600 hover:text-primary-700">weaveai.org</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
