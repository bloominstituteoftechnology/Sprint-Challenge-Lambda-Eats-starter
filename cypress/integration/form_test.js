//New Form test fro sprint

beforeEach(function () {
    cy.visit('http://localhost:3001/order-pizza');
})
describe('Test our form inputs', function () {
    it('adds text to name input', function () {
        cy.get("#pizzasize")
            .select("md")
            .should("have.value", "md")
            
        cy.get('[type="radio"]')
            .check('marinara')

        cy.get('[type="checkbox"]')
            .check("Pepperoni")
            .should("be.checked")

        cy.get('[name="gluten"]')
            .check({ force: true })
            .should("be.checked")

        cy.get('[name="textarea"]')
            .click()
            .type("leave it at the door")
            .should("have.value", "leave it at the door")

        cy.contains("Submit")
            .click({ force: true });

    });
});


