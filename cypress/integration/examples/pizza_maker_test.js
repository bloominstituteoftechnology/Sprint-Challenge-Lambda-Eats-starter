describe("Testing our Pizza Maker form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza")
    });
    it("Add test to inputs and submit form", function() {
        cy.get('[data-cy= nameArea]')
            .type("Henry")
            .should("have.value", "Henry");
        cy.get('[data-cy= instructions]')
            .type("Please add extra cheese")
            .should("have.value", "Please add extra cheese");
        cy.get('[data-cy= pepperoni]').check()
            .should('be.checked')
        cy.get('[data-cy= sausage]').check()
            .should('be.checked')
        cy.get('[data-cy= canadian]').check()
            .should('be.checked')
        cy.get('[data-cy= spicy]').check()
            .should('be.checked')
        cy.get('[data-cy= chicken]').check()
            .should('be.checked')
        cy.get('[data-cy= addButton]').click()
            
        
    })
})