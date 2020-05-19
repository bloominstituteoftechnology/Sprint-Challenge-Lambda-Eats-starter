describe("testing form inputs", () => {
    it("visit URL", () => {
        cy.visit('http://localhost:3000/PizzaForm');

        cy.get('input[type="checkbox"]').check();

        cy.get('textarea').type("Deliver to front door please").clear();

        cy.get('form').submit();
    });
});