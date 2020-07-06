
context("Test our form inputs", function() {
    beforeEach(function () {
        cy.visit("http://localhost:3000/")
    });

    it("selects values for inputs and submits form", function () {
        cy.get('button').click()
        cy.get('select')
        .select('Large').should('have.value', 'Large')
        cy.get('[type="radio"]').first().check()
        .should('have.value', 'red')
        cy.get('[type="checkbox"]').first().check()
        .should('have.value', 'pepperoni')
        cy.get("form").submit();
    })

});