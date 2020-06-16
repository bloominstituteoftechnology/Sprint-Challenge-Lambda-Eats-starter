describe('testing form inputs', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000/pizza');
    });
    it('tests name input', function () {
        cy.get('[data-cy=name]').type('Jenni');
    });
    it('tests meat topping selection', function () {
        cy.get('[data-cy=checkboxmeat1]').check().should("be.checked");
        cy.get('[data-cy=checkboxmeat2]').check().should("be.checked");
        cy.get('[data-cy=checkboxmeat3]').check().should("be.checked");
        cy.get('[data-cy=checkboxmeat4]').check().should("be.checked");
        cy.get('[data-cy=checkboxmeat5]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox1]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox2]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox3]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox4]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox5]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox6]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox7]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox8]').check().should("be.checked");
    });
    it('tests other topping selection', function () {
        cy.get('[data-cy=checkbox9]').check().should("be.checked");
    });
    it('tests form submition', function () {
        cy.get('[data-cy=submit]').submit();
    });
})