describe('Testing the form', () => {
    beforeEach(function () {
        // runs before each test in this block
        cy.visit('http://localhost:3000/pizza');
    });

    it('Finds the name input', () => {
        cy.get("input[cy-data='name']").type('Jonathan').should('have.value', 'Jonathan');;
    })
    it('clicks the toppings', () => {
        cy.get('input[cy-data=pepperoni]').click();
        cy.get('input[cy-data=sausage]').click();
    })
    it('clicks the submit button', () => {
        cy.get('button[cy-data=submit]').click();
    })
})