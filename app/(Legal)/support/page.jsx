import Script from 'next/script';
import FormTracker from '@/components/Global/FormTracker';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/support',
  },
  title: "Support – SyteRoam",
  description: "Get help with SyteRoam — the native mobile ERP companion for CloudSuite Industrial (SyteLine). Browse FAQs, troubleshoot issues, and contact our support team.",
};

export default function Support() {

  return (
    <div className="legal-page">
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <FormTracker formName="Support Form" formId="Tguf3qY75eyyjVRdIBFh" />

      <div className="legal-hero">
        <div className="legal-hero__circle lbc1"></div>
        <div className="legal-hero__circle lbc2"></div>
        <div className="legal-hero__circle lbc3"></div>

        <div className="sr-legal-container">
          <h1>Support Center</h1>
          <p>We're here to help. Find answers to common questions or get in touch with our team.</p>
        </div>
      </div>

      <div className="sr-legal-container legal-body">

        {/* Quick Help Cards */}
        <section className="legal-section support-cards-section">
          <div className="support-cards">
            <div className="support-card">
              <i className="icofont-lock support-card-icon"></i>
              <h3>Account &amp; Login</h3>
              <p>Issues signing in, resetting your password, or configuring your SyteLine server connection and multi-site setup.</p>
            </div>
            <div className="support-card">
              <i className="icofont-mobile-phone support-card-icon"></i>
              <h3>App &amp; ERP Issues</h3>
              <p>Experiencing crashes, data sync problems, or unexpected behaviour when connecting to your CloudSuite Industrial instance?</p>
            </div>
            <div className="support-card">
              <i className="icofont-data support-card-icon"></i>
              <h3>Data &amp; Privacy</h3>
              <p>Questions about your data, export requests, and account deletion. We respond within 30 days.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="legal-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>How do I connect SyteRoam to my SyteLine instance?</h3>
            <p>
              On the SyteRoam login screen, enter your <strong>Server URL</strong> (the address of your CloudSuite Industrial / SyteLine environment), along with your username and password. Multi-site configurations are supported — your IT administrator can provide the correct server URL and any required site codes. If your organisation needs setup assistance, contact our enterprise team at <a href="mailto:sales@quadkor.com">sales@quadkor.com</a>.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which ERP roles and modules does SyteRoam support?</h3>
            <p>
              SyteRoam currently supports <strong>Sales &amp; CRM</strong> and <strong>Procurement</strong> users. The application roadmap covers all major roles found in a typical manufacturing or service company, including Production, Quality, Maintenance, HR, and Finance. If you have a prioritisation request, please contact us using the form below.
            </p>
          </div>

          <div className="faq-item">
            <h3>Why does the layout look different on my phone versus my tablet?</h3>
            <p>
              This is by design. SyteRoam is built with an adaptive, device-aware layout system:
            </p>
            <ul>
              <li><strong>Phone portrait:</strong> Single-column focused view.</li>
              <li><strong>Phone landscape:</strong> Two-column layout for more context.</li>
              <li><strong>Tablet portrait:</strong> Two-column layout with expanded detail panels.</li>
              <li><strong>Tablet landscape:</strong> Full three-column workspace for maximum productivity.</li>
            </ul>
            <p>The layout automatically adapts when you rotate your device — no settings required.</p>
          </div>

          <div className="faq-item">
            <h3>How do I reset my password?</h3>
            <p>
              On the SyteRoam login screen, tap <strong>"Forgot Password?"</strong>. Enter your registered email address
              and we will send you a link to create a new password. If you do not receive the email within 5 minutes,
              please check your spam/junk folder. Note: if your organisation uses SSO or directory-based authentication,
              password resets must be handled by your IT administrator.
            </p>
          </div>

          <div className="faq-item">
            <h3>How do I delete my account?</h3>
            <p>You can delete your account in one of the following ways:</p>
            <ul>
              <li><strong>In-App:</strong> Go to <em>Settings → Account → Delete Account</em> and follow the on-screen steps.</li>
              <li><strong>By Email:</strong> Send a request to <a href="mailto:support@quadkor.com">support@quadkor.com</a> from your registered email address with the subject "Account Deletion Request".</li>
              <li><strong>Via this form:</strong> Use the contact form below and select "Account Deletion" as the subject.</li>
            </ul>
            <p>
              We will process your deletion request within <strong>30 days</strong> and send you a confirmation. All personal data
              will be permanently removed except where required by law (e.g., billing records).
            </p>
          </div>

          <div className="faq-item">
            <h3>The app is crashing or not syncing — what should I do?</h3>
            <p>Please try the following steps:</p>
            <ol>
              <li>Force-close the app and reopen it.</li>
              <li>Check that your device has a stable internet connection and can reach your SyteLine server URL.</li>
              <li>Ensure your device is running the latest operating system version.</li>
              <li>Uninstall and reinstall the SyteRoam app.</li>
              <li>If the problem persists, contact us using the form below and describe the issue — include your device model, OS version, and SyteLine version if known.</li>
            </ol>
          </div>

          <div className="faq-item">
            <h3>How do I cancel my subscription?</h3>
            <p>
              Subscriptions purchased via the <strong>Apple App Store</strong> must be cancelled through your Apple ID
              subscription settings (<em>Settings → [Your Name] → Subscriptions → SyteRoam</em>). Subscriptions
              purchased directly through our website can be cancelled from your account dashboard or by emailing{' '}
              <a href="mailto:support@quadkor.com">support@quadkor.com</a>.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="legal-section p-0!">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/Tguf3qY75eyyjVRdIBFh"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-Tguf3qY75eyyjVRdIBFh"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="2. SyteRoam Support Form"
            data-height="629"
            data-layout-iframe-id="inline-Tguf3qY75eyyjVRdIBFh"
            data-form-id="Tguf3qY75eyyjVRdIBFh"
            title="2. SyteRoam Support Form"
          ></iframe>
        </section>

        {/* Direct Contact */}
        <section className="legal-section">
          <h2>Direct Contact</h2>
          <div className="support-contact-grid">
            <div className="support-contact-item">
              <i className="icofont-envelope-open"></i>
              <h3>General Support</h3>
              <a href="mailto:support@quadkor.com">support@quadkor.com</a>
            </div>
            <div className="support-contact-item">
              <i className="icofont-building-alt"></i>
              <h3>Enterprise &amp; ERP Setup</h3>
              <a href="mailto:sales@quadkor.com">sales@quadkor.com</a>
            </div>
            <div className="support-contact-item">
              <i className="icofont-ssl-security"></i>
              <h3>Privacy &amp; Data</h3>
              <a href="mailto:support@quadkor.com">support@quadkor.com</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
