describe("e2e", () => {
  it("user wins", () => {
    cy.visit("http://localhost:3000/")
    cy.get("#root > main > section > div > div:nth-child(2) > div:nth-child(1)").click()
    cy.get("#root > main > section > div > div:nth-child(2) > div:nth-child(4)").click()
    cy.get("#root > main > section > div > div:nth-child(2) > div:nth-child(3)").click()
    cy.get("#root > main > section > div > div:nth-child(2) > div:nth-child(5)").click()
    cy.get("#root > main > section > div > div:nth-child(2) > div:nth-child(9)").click()
    cy.get("#root > main > section > div > div:nth-child(2) > div:nth-child(6)").click()

    cy.get("#root > main > section > div > div:nth-child(1) > div").should("have.text", "Winner")
  })
})
