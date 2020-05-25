describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  

  it("Should visit page and input the name", () => {
    cy.visit('http://localhost:3000/Pizza')
    cy.get('input[name="name"]')
    .type("Michelle")
    .should("have.value", "Michelle");
});

  describe('Toppings selector test', () => {
    it('Tests you can select multiple toppings', () => {
      cy.visit('http://localhost:3000/Pizza')
      cy.get('input[name="sausage"]').click()
      cy.get('input[name="cheese"]').click()
      cy.get('input[name="pinneapple"]').click()
      cy.get('input[name="olives"]').click()
    })
  })

  describe('Submit test', () => {
    it('Tests you can submit the form', () => {
      cy.visit('http://localhost:3000/Pizza')
      cy.get('input[name="name"]')
      .type("Michelle")
      .should("have.value", "Michelle");
      cy.get('[data-cy=submit]').click()
    })
  })