describe("Testing our form inputs", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000/");
    })
    it("Adds text to inputs and submits form", function() {
      cy.get('input[name="name"]')
        .type("Andrew")
        .should("have.value", "Andrew");
      cy.get('input[name="email"]')
        .type("drewcifer88@gmail.com")  
        .should("have.value", "drewcifer88@gmail.com");
      cy.get('input[name="size"]')
        .type("small")  
        .should("have.value", "small");  
      cy.get('input[name="checkbox"]')
        .type("checkbox")
        .should("have.value", "oncheck");  
    })});