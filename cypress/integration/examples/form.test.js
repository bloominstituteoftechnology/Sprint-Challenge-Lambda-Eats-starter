describe('Testing Form Functionality', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });
    it('Typing into name field', function() {
        cy.get('[data-cy="name"]')
            .type('First Last')
            .should('have.value', 'First Last');
        cy.get('[data-cy="veggie1"]')
            .check()
            .should('be.checked');
        cy.get('[data-cy="veggie2"]')
            .check()
            .should('be.checked');
        cy.get('[data-cy="meat1"]')
            .check()
            .should('be.checked');
        cy.get('[data-cy="meat2"]')
            .check()
            .should('be.checked');
        cy.get('[data-cy="order"]').click();
    });
});