describe("Test the form inputs", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza");
    })
    it("adds text to inputs and submit form", function(){
        cy.get('[data-cy="name"]').type("Lexi").should("have.value", "Lexi");
        cy.get('select').eq(0).select('Small');
        cy.get('select').eq(1).select('BBQ');
        cy.get('[type="checkbox"]').check().should("be.checked");
        cy.get('select').eq(2).select('Yes');
        cy.get('[data-cy="special"]').type("No Thanks").should("have.value", "No Thanks");
        cy.get('select').eq(3).select('five');
        cy.get("form").submit();
    });
})