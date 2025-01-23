import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | JusticeForAll",
  description: "Our commitment to protecting your privacy and complying with data protection regulations",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: [Current Date]</p>

      <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
      <p className="mb-4">
        JusticeForAll ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your
        personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
        you use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
      <p className="mb-4">We collect information you provide directly to us when you:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Create an account</li>
        <li>Use our services</li>
        <li>Communicate with us</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide, maintain, and improve our services</li>
        <li>Communicate with you about our services</li>
        <li>Protect against, investigate, and prevent fraudulent, unauthorized, or illegal activity</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Data Retention</h2>
      <p className="mb-4">
        We retain your personal data for as long as necessary to provide you with our services and as described in this
        Privacy Policy. We may also retain and use this information to comply with our legal obligations, resolve
        disputes, and enforce our agreements.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have certain rights regarding your personal data, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>The right to access and receive a copy of your personal data</li>
        <li>The right to rectify or update your personal data</li>
        <li>The right to erase your personal data</li>
        <li>The right to restrict or object to our processing of your personal data</li>
        <li>The right to data portability</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
        Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>
        JusticeForAll
        <br />
        [Your Address]
        <br />
        Email: privacy@justiceforall.com
      </p>
    </div>
  )
}

