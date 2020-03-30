/* eslint-disable no-undef */
describe("Testing form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
    it("Add text to inputs and submit form", () => {
      cy.get('nav > div > [href="/order"]')
        .click()
        .pause()
      cy.get('input[name="name"]')
        .type("Joo Woon")
        .should("have.value", "Joo Woon");
      cy.get('select')
        .select('Large')
        .should("have.value", "Large");
      cy.get('[for="ExtraCheese"] > input')
        .check()
        .should('be.checked');
      cy.get('[for="BlackOlive"] > input')
        .check()
        .should('be.checked');
      cy.get('[for="GreenPepper"] > input')
        .check()
        .should('be.checked');
      cy.get('[for="Onion"] > input')
        .check()
        .should('be.checked');
        cy.get('textarea')
        .type("Stay Safe!")
      cy.get('button').click();
  
  
    })
  });