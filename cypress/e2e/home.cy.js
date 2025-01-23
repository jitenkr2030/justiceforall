describe("Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/")
    cy.contains("Welcome to JusticeForAll")
    cy.contains("Get Started").click()
    cy.url().should("include", "/register")
  })
})

