describe('Testing our Form', () =>{
  beforeEach(function () {
      cy.visit('http://localhost:3000');
      cy.get('[href="/pizza"]').click();
  });
  it('Get the name input and input the name', () =>{
      cy.get('[data-cy="name-input"]')
      .type("Emilio Crocco")
      .should("have.value", "Emilio Crocco")
      .clear();
      cy.contains("Please input your name.");
      cy.get('[data-cy="submit"]').should('be.disabled')
  });

  it('get checkbox attribute and test if the user can check and uncheck toppings', () =>{
      cy.get('[data-cy="checkbox"]')
      .check()
      .should('be.checked')
      .uncheck();
  });
  it('Testing the Submit button', () => {
      cy.get('[data-cy="name-input"]')
      .type("Emilio")
      .should("have.value", "Emilio");
      cy.get('[data-cy="checkbox"]')
      .check()
      .should('be.checked');
      cy.get('#amountOrdered')
      .type("1")
      cy.get('[data-cy="submit"]')
      .click();
  })
});