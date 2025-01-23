import React from "react"
import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/footer"

describe("Footer", () => {
  it("renders the copyright notice", () => {
    render(<Footer />)
    const copyright = screen.getByText(/© \d{4} JusticeForAll. All rights reserved./)
    expect(copyright).toBeInTheDocument()
  })

  it("renders quick links", () => {
    render(<Footer />)
    const aboutLink = screen.getByText("About Us")
    const servicesLink = screen.getByText("Our Services")
    const contactLink = screen.getByText("Contact Us")
    expect(aboutLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it("renders legal links", () => {
    render(<Footer />)
    const termsLink = screen.getByText("Terms of Service")
    const privacyLink = screen.getByText("Privacy Policy")
    expect(termsLink).toBeInTheDocument()
    expect(privacyLink).toBeInTheDocument()
  })

  it("renders social media links", () => {
    render(<Footer />)
    const facebookLink = screen.getByText("Facebook")
    const twitterLink = screen.getByText("Twitter")
    const linkedinLink = screen.getByText("LinkedIn")
    expect(facebookLink).toBeInTheDocument()
    expect(twitterLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()
  })
})

