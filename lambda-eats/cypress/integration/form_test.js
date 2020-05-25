describe("Testing our Pizza form Inputs.", function() {

    this.beforeEach(function(){
        cy.visit("http://localhost:3000/Pizza/");
    });

    it("Add text inputs", function() {
        cy.get('[data-cy="name"]').type("Jason Ours").should("have.value", "Jason Ours");
        cy.get("#size").select("X-Large").should("have.value", "X-Large");
        cy.get('[data-cy="garlic"]').check();
        cy.get('[type="checkbox"]').check();
        cy.get("#quantity").select("mile").should("have.value", "mile");
        cy.contains('Add to Order').click();
    })
})