describe("Testing our inputs", function () {
    beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
    });
    it("test name input", function() {
        cy.get("[data-cy=name]").type("Testing name out");
    });
    it('test checkbox input', function () {
        cy.get('[ data-cy=checkbox1]').check().should('be.checked')
    })
    it('test checkbox input', function () {
        cy.get('[ data-cy=checkbox2]').check().should('be.checked')
    })
    it('test checkbox input', function () {
        cy.get('[ data-cy=checkbox3]').check().should('be.checked')
    })
    it('test checkbox input', function () {
        cy.get('[ data-cy=checkbox4]').check().should('be.checked')
    })
    it('test checkbox input', function () {
        cy.get('[ data-cy=checkbox5]').check().should('be.checked')
    })
    it('test checkbox input', function () {
        cy.get('[ data-cy=checkbox6]').check().should('be.checked')
    })
    it('test checkbox input', function () {
        cy.get('[ data-cy=checkbox7]').check().should('be.checked')
    })
    it('test form submit', function () {
        cy.get('[data-cy=submit]').submit()
    })
});