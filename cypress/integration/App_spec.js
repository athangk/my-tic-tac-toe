describe("e2e", () => {
  it("user X wins", () => {

    cy.visit('http://localhost:3000/')
    


    cy.get(':nth-child(1) > .cell__inner').click()
    cy.get(':nth-child(2) > .cell__inner').click()
    cy.get(':nth-child(3) > .cell__inner').click()
    cy.get(':nth-child(4) > .cell__inner').click()
    cy.get(':nth-child(5) > .cell__inner').click()
    cy.get(':nth-child(6) > .cell__inner').click()
    cy.get(':nth-child(7) > .cell__inner').click()
    cy.get(':nth-child(8) > .cell__inner').click()
    cy.get(':nth-child(9) > .cell__inner').click()

    cy.get('.player-label').should("have.text","Winner: X")
//   const { container } = render(<App/>)

//   const turn1=container.querySelectorAll('.cell__inner')[0];
//   const turn2=container.querySelectorAll('.cell__inner')[3];
//   const turn3=container.querySelectorAll('.cell__inner')[2];
//   const turn4=container.querySelectorAll('.cell__inner')[4];
//   const turn5=container.querySelectorAll('.cell__inner')[8];
//   const turn6=container.querySelectorAll('.cell__inner')[5];
 
//   fireEvent.click(turn1)
//   fireEvent.click(turn2)
//   fireEvent.click(turn3)
//   fireEvent.click(turn4)
//   fireEvent.click(turn5)
//   fireEvent.click(turn6)

//   const linkElement = screen.getByText(/Winner: O/i);
//   expect(linkElement).toBeInTheDocument();

  })
})
