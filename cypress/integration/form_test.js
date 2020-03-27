describe("Testing our form inputs", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000/pizza");
    })
    it("Adds text to inputs and submits form", function() {
      cy.get('input[name="name"]')
        .type("Andrew Sitzes")
        .should("have.value", "Andrew Sitzes");
      cy.get('input[name="email"]')
        .type("drewcifer88@gmail.com")  
        .should("have.value", "drewcifer88@gmail.com");
      cy.get('select[name="size"]')
        .select("small")  
        .should("have.value", "small");  
      cy.get('[type=checkbox]') 
        .check()
        .should("be.checked")
      cy.get('button')   
        .click()
        .should("be.exist")
    })});