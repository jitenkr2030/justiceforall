import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | JusticeForAll",
  description: "Our terms of service agreement",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">Last updated: [Date]</p>
      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using the JusticeForAll platform, you agree to be bound by these Terms of Service.
      </p>
      {/* Add more sections as needed */}
    </div>
  )
}

