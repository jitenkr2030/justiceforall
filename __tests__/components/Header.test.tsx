import React from "react"
import { render, screen } from "@testing-library/react"
import { Header } from "@/components/header"

jest.mock("next-auth/react", () => ({
  useSession: () => ({ data: null, status: "unauthenticated" }),
}))

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />)
    const logo = screen.getByText("JusticeForAll")
    expect(logo).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Header />)
    const dashboardLink = screen.getByText("Dashboard")
    const casesLink = screen.getByText("Cases")
    expect(dashboardLink).toBeInTheDocument()
    expect(casesLink).toBeInTheDocument()
  })

  it("renders the login button when user is not authenticated", () => {
    render(<Header />)
    const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument()
  })

  it("renders the theme toggle button", () => {
    render(<Header />)
    const themeToggle = screen.getByLabelText("Toggle theme")
    expect(themeToggle).toBeInTheDocument()
  })
})

