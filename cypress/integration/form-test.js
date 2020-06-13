describe('testing form inputs', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000/pizza');
    });
    it('tests name input', function () {
        cy.get('[data-cy=name]').type('Jenni');
    });
    it('tests meat topping selection', function () {
        cy.get('[data-cy=name]').Click();
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox1]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox2]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox3]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox4]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox5]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox6]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox7]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox8]').Check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox9]').Check().should("be.checked");
    });
    it('tests form submition', function () {
        cy.get('[data-cy=sumbit]').Submit();
    });
})