import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiShield, FiLock, FiEye, FiMail } from "react-icons/fi";

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 26, 2026";

  return (
    <div className="py-20 bg-white text-slate-900 font-sans">

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        {/* Title Section */}
        <div className="border-b border-slate-100 pb-10 mb-12">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium">
            Last updated: {lastUpdated}. Please read this privacy policy carefully to understand how we handle your information.
          </p>
          <p className="text-slate-500 font-medium mt-10">
            EDDVA ("we", "us", or "our") operates the EDDVA learning platform, including our website, mobile applications, and related services (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use the Services.
          </p>
        </div>

        {/* Legal Text Body */}
        <div className="space-y-12 text-slate-600 font-medium leading-relaxed text-base sm:text-lg max-w-none">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              1. Who this applies to
            </h2>
            <p>
              This policy applies to visitors, registered students, teachers, institute administrators, and other users who access or use the Services on behalf of themselves or an educational institution.
            </p>
            {/* <ul className="list-disc list-inside space-y-2 pl-2 text-slate-500 text-sm sm:text-base">
              <li><strong className="text-slate-800">Account Details:</strong> Name, email address, password, and configuration preferences.</li>
              <li><strong className="text-slate-800">Learning Analytics:</strong> Progress metrics, course interaction histories, quiz scores, and AI generated recommendations.</li>
              <li><strong className="text-slate-800">Payment Information:</strong> Secure, encrypted billing tokens managed through our core downstream payment processing merchant.</li>
            </ul> */}
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              2. Information we collect
            </h2>
            <p>
              We may collect the following categories of information, depending on how you use the Services:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-500 text-sm sm:text-base">
              <li><strong className="text-slate-800">Account and profile data:</strong>name, email address, phone number, password (stored in hashed form), role (e.g. student, teacher), institute or batch associations, and profile preferences you choose to provide.</li>
              <li><strong className="text-slate-800">Learning activity:</strong> course progress, lecture views, quiz and assessment results, doubt questions you submit, attendance in live classes, and similar usage data generated through the platform.</li>
              <li><strong className="text-slate-800">Content you upload:</strong>files, images, or text you submit for assignments, doubts, or institute-managed content, where applicable.</li>
              <li><strong className="text-slate-800">Technical data:</strong>IP address, device type, browser type, approximate location derived from IP, log timestamps, and diagnostic data used to secure and improve the Services.</li>
              <li><strong className="text-slate-800">Communications:</strong>messages you send to us (e.g. support requests) and optional marketing preferences where permitted by law.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              3. How we use information
            </h2>
            <p>
              We use collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-500 text-sm sm:text-base">
              <li>Provide, operate, and improve the Services, including personalization and adaptive learning features;</li>
              <li>Authenticate users, prevent fraud and abuse, and maintain the security of the platform;</li>
              <li>Communicate with you about your account, updates, and (where you have opted in) marketing;</li>
              <li>Comply with legal obligations and enforce our terms; and</li>
              <li>Analyse aggregated or de-identified usage to improve product experience.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              4. Sharing of information
            </h2>
            <p>
              We do not sell your personal information. We may share information with: (a) the educational institute or batch you are enrolled with, as needed for teaching and administration; (b) service providers who assist us with hosting, analytics, email delivery, or security, under appropriate contracts; (c) professional advisers where required; and (d) authorities when required by law or to protect rights and safety.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              5. Data retention
            </h2>
            <p>
              We retain information for as long as your account is active or as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods may vary by data type and institute configuration.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              6. Security
            </h2>
            <p>
             We implement technical and organisational measures designed to protect personal information. No method of transmission over the Internet is completely secure; we encourage you to use strong passwords and protect your credentials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              7. Your choices and rights
            </h2>
            <p>
             Depending on applicable law, you may have the right to access, correct, delete, or export certain personal data, or to object to or restrict certain processing. To exercise these rights, contact us at the email below. You may opt out of marketing communications at any time using the unsubscribe link in those messages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              8. Children's privacy
            </h2>
            <p>
             Our Services may be used by students under 18 with the involvement of a parent, guardian, or educational institute. We do not knowingly collect personal information from children without appropriate authority. If you believe we have collected information improperly, please contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              9. International transfers
            </h2>
            <p>
             Your information may be processed in India and in other countries where we or our subprocessors operate, subject to appropriate safeguards as required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              10. Changes to this policy
            </h2>
            <p>
             We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the "Last updated" date. Material changes may be communicated through the Services or by email where appropriate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              11. Contact
            </h2>
            <p>
              For privacy-related questions or requests, contact us at <a href="mailto:hello@eddva.com" className="text-blue">hello@eddva.com </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}