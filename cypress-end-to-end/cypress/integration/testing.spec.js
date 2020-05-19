<reference types="cypress" />

context('Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });
  
  it('can type', () => {
    cy.get('[name=name]').type('Annemarie').should('have.value', 'Annemarie');
  });
