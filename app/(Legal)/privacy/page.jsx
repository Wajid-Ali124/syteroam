import Link from 'next/link';

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
  title: "Privacy Policy – SyteRoam",
  description: "SyteRoam's Privacy Policy explains how we collect, use, and protect your data when you use our native mobile ERP companion for CloudSuite Industrial (SyteLine).",
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">

      <div className="legal-hero">
        <div className="sr-legal-container">
          <h1>Privacy Policy</h1>
          <p>Last updated: March 16, 2026</p>
        </div>
      </div>

      <div className="sr-legal-container legal-body">

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to SyteRoam ("we", "our", or "us"). SyteRoam is a native mobile ERP companion
            application for CloudSuite Industrial (SyteLine), operated by SyteRoam Inc. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you use
            our mobile application and website (collectively, the "Service"). Please read this policy
            carefully. By using SyteRoam, you agree to the collection and use of information in
            accordance with this policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following categories of personal information:</p>
          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li><strong>Account Information:</strong> Full name, email address, job title, company name, and password when you register for an account.</li>
            <li><strong>Business Data:</strong> ERP records such as sales leads, purchase orders, customer contacts, vendor details, opportunity notes, and other data that you input into or access through the app — which is synchronised with your CloudSuite Industrial (SyteLine) instance.</li>
            <li><strong>Contact Form Submissions:</strong> Name, email address, and message content when you contact our support team.</li>
          </ul>
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Device Information:</strong> Device type, screen size and orientation, operating system version, unique device identifiers, and crash reports.</li>
            <li><strong>Usage Data:</strong> Modules accessed, time spent in the app, and interaction logs to improve the Service.</li>
            <li><strong>Log Data:</strong> IP address, browser type, pages visited, and timestamps when accessing our website.</li>
          </ul>
          <h3>2.3 Information from Enterprise Configurations</h3>
          <ul>
            <li>If your organisation has deployed SyteRoam against a multi-site SyteLine environment, we may process organisational data (e.g., user roles, site assignments, ERP credentials) as a data processor on behalf of your employer.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain the SyteRoam Service.</li>
            <li>Facilitate secure connectivity between the app and your CloudSuite Industrial (SyteLine) instance.</li>
            <li>Create and manage your user account.</li>
            <li>Send administrative communications, such as password reset emails and service notifications.</li>
            <li>Respond to support inquiries and provide customer service.</li>
            <li>Detect, prevent, and address technical issues, fraud, and security threats.</li>
            <li>Analyse usage patterns to improve our features and user experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p>We do <strong>not</strong> sell your personal data to third parties.</p>
        </section>

        <section className="legal-section">
          <h2>4. Sharing Your Information</h2>
          <p>We may share your information only in the following limited circumstances:</p>
          <ul>
            <li><strong>With Your Employer (Enterprise Deployments):</strong> If you use SyteRoam through an enterprise licence, your usage data and ERP transaction data may be visible to authorised administrators within your organisation.</li>
            <li><strong>Service Providers:</strong> We may share data with trusted third-party vendors (e.g., cloud hosting, analytics) who assist us in operating the Service. These providers are contractually bound to protect your data and may not use it for their own purposes.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law, court order, or government authority.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of company assets, user information may be transferred to the acquiring entity, and we will notify you via email and/or a prominent notice on our website.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to provide
            you with the Service. If you request account deletion, we will delete or anonymise your
            personal data within <strong>30 days</strong>, except where we are legally required to retain
            certain records (e.g., billing records for tax compliance, which are kept for up to 7 years
            as required by law).
          </p>
          <p>
            ERP business data accessed through the app (such as sales orders, purchase orders, or
            customer records) is not stored permanently by SyteRoam — it is retrieved in real time from
            your CloudSuite Industrial (SyteLine) instance. Any locally cached data is cleared upon
            account deletion or session termination.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data and account (see Section 7 below).</li>
            <li><strong>Data Portability:</strong> Request a machine-readable export of your personal data.</li>
            <li><strong>Objection / Restriction:</strong> Object to or request restriction of certain processing of your data.</li>
            <li><strong>Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw that consent at any time.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:support@quadkor.com">support@quadkor.com</a>.</p>
        </section>

        <section className="legal-section">
          <h2>7. Account Deletion</h2>
          <p>You have the right to delete your SyteRoam account and all associated personal data at any time.</p>
          <h3>How to Delete Your Account:</h3>
          <ul>
            <li><strong>In-App:</strong> Navigate to <em>Settings → Account → Delete Account</em> and follow the on-screen instructions.</li>
            <li><strong>By Email:</strong> Send a deletion request to <a href="mailto:support@quadkor.com">support@quadkor.com</a> from your registered email address with the subject line "Account Deletion Request".</li>
            <li><strong>Via Support:</strong> Submit a request through our <Link href="/support">Support Page</Link>.</li>
          </ul>
          <p>
            Upon receiving your deletion request, we will process it within <strong>30 days</strong> and send you a
            confirmation email. All personal information and usage history will be permanently removed,
            except where retention is required for legal compliance (see Section 5).
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data, including:
          </p>
          <ul>
            <li>Encryption of data in transit using TLS/HTTPS.</li>
            <li>Encryption of sensitive data at rest.</li>
            <li>Secure multi-site login with enterprise-grade authentication aligned to CloudSuite Industrial (SyteLine) security standards.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Strict access controls — only authorised personnel can access user data.</li>
          </ul>
          <p>
            While we take all reasonable precautions, no method of transmission over the internet or
            electronic storage is 100% secure. We cannot guarantee absolute security, and you use the
            Service at your own risk.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Children's Privacy</h2>
          <p>
            SyteRoam is a business-to-business enterprise application intended for use by professional
            employees of manufacturing and service companies, aged 18 and over. We do not knowingly
            collect personal information from children under the age of 13. If we become aware that a
            child has provided us with personal data, we will delete such information immediately. If
            you believe a child has provided us with their information, please contact us at{' '}
            <a href="mailto:support@quadkor.com">support@quadkor.com</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Third-Party Services and Links</h2>
          <p>
            The Service connects to and integrates with CloudSuite Industrial (SyteLine) and may
            contain links to other third-party services or platforms. This Privacy Policy does not apply
            to those third-party services. We encourage you to review the privacy policies of any
            third-party services you access through or in connection with SyteRoam.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. International Data Transfers</h2>
          <p>
            SyteRoam operates globally. Your information may be transferred to and processed in
            countries other than your country of residence. These countries may have data protection
            laws that differ from those in your jurisdiction. Where we transfer data internationally,
            we ensure appropriate safeguards are in place, such as Standard Contractual Clauses
            approved by the European Commission.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make material changes, we will
            notify you by email (sent to the address associated with your account) and by posting a
            notice in the app at least 30 days before the changes take effect. Your continued use of
            the Service after the effective date constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <div className="legal-contact-block">
            <p><strong>QuadKor, Inc.</strong></p>
            <p>9655 Granite Ridge Drive, Suite 200<br />San Diego, CA, 92123</p>
            <p>Phone: (949) 284-8115</p>
            <p>Email: <a href="mailto:support@quadkor.com">support@quadkor.com</a></p>
            <p>Support: <a href="https://www.quadkor.com/support/" target="_blank">quadkor.com/support</a></p>
          </div>
        </section>

      </div>
    </div>
  );
}
