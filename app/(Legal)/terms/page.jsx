import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: '/terms',
  },
  title: "Terms of Service – SyteRoam",
  description: "Read SyteRoam's Terms of Service (EULA) to understand the rules, rights, and limitations for using our native mobile ERP companion for CloudSuite Industrial (SyteLine).",
};

export default function TermsOfService() {
  return (
    <div className="legal-page">

      <div className="legal-hero">
        <div className="sr-legal-container">
          <h1>Terms of Service</h1>
          <p>Last updated: March 16, 2026</p>
        </div>
      </div>

      <div className="sr-legal-container legal-body">

        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your")
            and SyteRoam Inc. ("Company", "we", "our", or "us") governing your access to and use of the SyteRoam mobile
            application and website (collectively, the "Service").
          </p>
          <p>
            By downloading, installing, accessing, or using the SyteRoam application, you confirm that you have read,
            understood, and agree to be bound by these Terms and our <Link href="/privacy">Privacy Policy</Link>, incorporated
            herein by reference. If you do not agree, you must immediately discontinue use of the Service.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. End User Licence Agreement (EULA)</h2>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to:
          </p>
          <ul>
            <li>Download and install the SyteRoam application on mobile devices that you own or control.</li>
            <li>Access and use the Service for your employer's internal business purposes in connection with a licensed CloudSuite Industrial (SyteLine) ERP environment.</li>
          </ul>
          <p>You acknowledge that:</p>
          <ul>
            <li>These Terms are between you and SyteRoam Inc. only, not with Apple Inc. or Google LLC.</li>
            <li>Apple Inc. and Google LLC are not responsible for the Service or its content.</li>
            <li>Apple Inc. has no obligation whatsoever to furnish any maintenance or support services with respect to the App.</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple Inc. and Apple will refund the purchase price of the App to you (if any). Apple has no other warranty obligation whatsoever with respect to the App.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Eligibility</h2>
          <p>
            SyteRoam is a business-to-business application designed for employees of manufacturing and service companies.
            You must be at least 18 years of age and an authorised employee or contractor of an organisation that holds a
            valid CloudSuite Industrial (SyteLine) licence to use the Service. By using SyteRoam, you represent and warrant that:
          </p>
          <ul>
            <li>You are at least 18 years old.</li>
            <li>You have the legal authority to enter into these Terms.</li>
            <li>You are an authorised user within a licensed SyteLine environment.</li>
            <li>You are not located in a country subject to a U.S. Government embargo or designated as a "terrorist supporting" country.</li>
            <li>You are not listed on any U.S. Government list of prohibited or restricted parties.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. User Accounts</h2>
          <p>
            To access the Service, you must create an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Maintain and promptly update your account information to keep it accurate.</li>
            <li>Keep your password and SyteLine connection credentials confidential and not share them with any third party.</li>
            <li>Accept responsibility for all activities that occur under your account.</li>
            <li>Notify us immediately at <a href="mailto:support@quadkor.com">support@quadkor.com</a> if you become aware of any unauthorised access to your account.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your account if we determine that you have provided false or
            misleading information, or if we detect any fraudulent or unauthorised activity.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Acceptable Use</h2>
          <p>You agree to use the Service only for lawful business purposes and in accordance with these Terms. You agree <strong>not</strong> to:</p>
          <ul>
            <li>Use the Service in any way that violates any applicable local, national, or international law or regulation.</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material ("spam").</li>
            <li>Attempt to gain unauthorised access to any part of the Service, the connected SyteLine environment, or its related systems or networks.</li>
            <li>Use the Service to store or transmit malicious code, viruses, or any software intended to damage or interfere with the proper working of the Service or any connected ERP system.</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the application.</li>
            <li>Rent, lease, lend, sell, sublicence, distribute, or otherwise transfer the app to any third party.</li>
            <li>Use automated means (bots, scrapers) to access or collect data from the Service or from the connected SyteLine instance.</li>
            <li>Use the Service to process data of children under 13 years of age.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Intellectual Property</h2>
          <p>
            The Service and all of its original content, features, functionality, design, code, logos, and branding are and
            will remain the exclusive intellectual property of SyteRoam Inc. and its licensors, protected by copyright,
            trademark, and other intellectual property laws.
          </p>
          <p>
            Your use of the Service does not grant you any ownership rights. You may not copy, modify, create derivative
            works, publicly display, or exploit any part of the Service without our express written permission.
          </p>
          <p>
            All ERP data accessed through SyteRoam (including sales orders, purchase orders, customer and vendor records)
            remains the property of your organisation and is governed by your organisation's agreement with Infor
            (CloudSuite Industrial / SyteLine). SyteRoam acts solely as a mobile interface to that data and does not
            claim any ownership over it.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Subscription and Payments</h2>
          <p>
            Certain features of SyteRoam may require a subscription. By subscribing, you agree to pay all applicable
            fees and authorise us (or our payment processor) to charge your designated payment method on a recurring basis.
          </p>
          <ul>
            <li><strong>Free Trial:</strong> If a free trial is offered, it will convert to a paid subscription at the end of the trial period unless you cancel before the trial ends.</li>
            <li><strong>Cancellation:</strong> You may cancel your subscription at any time and will retain access until the end of your current billing period. No partial refunds are issued for unused time.</li>
            <li><strong>Price Changes:</strong> We reserve the right to change subscription fees. We will notify you at least 30 days in advance before any price change takes effect.</li>
            <li><strong>App Store Purchases:</strong> If you purchase a subscription through the Apple App Store or Google Play, the purchase is subject to the payment policies of those platforms.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Third-Party Services</h2>
          <p>
            The Service integrates with CloudSuite Industrial (SyteLine) and may connect to other third-party platforms.
            We do not endorse, control, or assume any responsibility for those third-party services. Your use of any
            third-party service is governed by that service's own terms and privacy policy.
          </p>
          <p>
            Apple Inc. and the Apple App Store are third parties that are beneficiaries of these Terms. Upon your acceptance
            of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these
            Terms against you as a third-party beneficiary thereof.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
            OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT
            ANY DEFECTS WILL BE CORRECTED.
          </p>
          <p>
            IN THE EVENT OF ANY FAILURE OF THE APP TO CONFORM TO ANY APPLICABLE WARRANTY, YOU MAY NOTIFY APPLE INC., AND
            APPLE WILL REFUND THE PURCHASE PRICE FOR THE APP TO YOU, IF ANY. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
            LAW, APPLE WILL HAVE NO OTHER WARRANTY OBLIGATION WHATSOEVER WITH RESPECT TO THE APP.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SYTEROAM INC. SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR
            BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE.
          </p>
          <p>
            OUR TOTAL LIABILITY TO YOU FOR ANY CAUSE OF ACTION ARISING UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF
            (A) THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) $100 USD.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the Service at any time, with or without cause or
            notice, including for violation of these Terms.
          </p>
          <p>
            You may terminate your account at any time by following the account deletion instructions in our{' '}
            <Link href="/privacy"> Privacy Policy (Section 7)</Link> or by contacting us at <a href="mailto:support@quadkor.com">support@quadkor.com</a>.
          </p>
          <p>
            All provisions of these Terms which by their nature should survive termination shall survive, including
            ownership provisions, disclaimers, indemnity, and limitations of liability.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Governing Law and Disputes</h2>
          <p>
            These Terms shall be governed by and construed under the laws of the State of New York, United States, without
            regard to its conflict of law principles. You agree that any dispute arising out of or relating to these Terms
            or the Service shall be resolved exclusively through binding arbitration in New York, NY, except that either
            party may seek injunctive relief in a court of competent jurisdiction.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Material changes will be communicated via email and/or
            an in-app notification at least 30 days before they take effect. Your continued use of the Service after the
            effective date signifies your acceptance of the updated Terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Contact Us</h2>
          <p>For questions about these Terms, please contact us:</p>
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
