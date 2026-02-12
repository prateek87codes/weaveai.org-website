# Privacy Policy

**Last Updated:** January 17, 2026

## 1. Introduction

WeaveAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension ("the Service").

**TL;DR:** We do not track your browsing history. We do not sell your data. Your conversations and API keys are stored locally on your device. We only verify your subscription status and count prompt usage to enforce limits.

## 2. Information We Collect

### A. Information You Provide

* **Account Information:** Email address (required for authentication and subscription management via Supabase).
* **Payment Information:** Processed securely by Stripe. **WeaveAI never accesses or stores your credit card details.**
* **User Content:** Text prompts and questions you submit to the chat.
* **API Keys (BYOK):** If you use the "Bring Your Own Key" feature, your OpenAI/Anthropic/Google keys are stored **exclusively in your browser's local storage** using AES encryption. They are never sent to our servers.

### B. Information Automatically Collected

* **Subscription Usage:** We track the number of prompts used during your billing cycle to enforce plan limits (e.g., 800 prompts/mo).
* **Anonymous Telemetry:** We collect minimal, anonymized data on feature usage (e.g., "User used PDF feature") to improve the product. You can opt-out of this in Settings.
* **Extension Diagnostics:** Error logs and browser version to assist with debugging.

### C. Information We Do NOT Collect

* **Your Browsing History:** We strictly **do not** monitor or log the websites you visit.
* **Page Content:** We only process the specific text of the tabs, PDFs, or Videos you **explicitly select** in the sidebar. We do not "read" your background tabs.
* **Chat History:** We do not sync your chat history to our cloud. It lives 100% on your device.

## 3. How We Process Data (The "Flow")

### A. When Using "Managed" AI (Basic/Pro Plan)

When you use our provided AI models (Gemini Flash/Pro):

1. Your prompt and the selected tab content are sent securely (HTTPS) to our proxy server.
2. Our server forwards the request immediately to the AI Provider (Google Vertex AI/Gemini).
3. **Zero-Retention:** Our server **does not log or store** the text of your prompts or the content of your pages. It acts only as a pass-through authentication layer.

### B. When Using "Bring Your Own Key" (BYOK)

When you use your own API Key:

1. Your browser communicates **directly** with the AI Provider (OpenAI, Anthropic, Google or other providers).
2. Your data **never touches WeaveAI servers**.
3. The privacy policy of the respective AI Provider (e.g., OpenAI Enterprise Privacy) applies to that interaction.

## 4. Google User Data Policy (Limited Use)

WeaveAI's use and transfer to any other app of information received from Google APIs will adhere to the **[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)**, including the Limited Use requirements.

* **Scope:** We only request `drive.readonly` access if you explicitly choose to chat with a Google Doc.
* **No Humans:** No humans at WeaveAI ever read your Google Docs.

## 5. Data Retention

* **Account Data:** Retained as long as your account is active. Deleted upon request.
* **Chat History:** Stored locally in your browser. **You have full control to clear this at any time.** We do not auto-delete it unless you uninstall the extension.
* **Usage Logs:** Aggregated and anonymized after 90 days.

## 6. Third-Party Processors

We use trusted third-party services for specific functions:

* **Stripe:** Payment processing.
* **Supabase:** Authentication & Database.
* **PostHog:** Anonymized product analytics (Privacy-focused).

## 7. Your Rights (GDPR & CCPA)

Under GDPR (EU) and CCPA (California), you have the right to:

* **Access/Portability:** Request a copy of your account data.
* **Deletion:** Request complete deletion of your account and subscription records.
* **Opt-Out:** Disable anonymous usage tracking.

To exercise these rights, email: **reachweaveai@gmail.com**

## 8. Contact & Trader Information

For legal inquiries or privacy concerns:

**WeaveAI**

**Email:** reachweaveai@gmail.com
**Website:** weaveai.org