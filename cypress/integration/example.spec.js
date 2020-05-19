/// <reference types="cypress"/>

describe("Example", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("tryToType", function () {
    cy.get('[name="name"]').type("Annemarie").should("have.value", "Annemarie");
  });

  it("should allow me to select toppings", function () {
    cy.get('[data-test-id="bestTopping"]').click().should("be.checked");
  });

  it("should submit form", function(){
    cy.get('[name="name"]').type("Annemarie");
    cy.get('[data-test-id="bestTopping"]').click();
    cy.get('[data-test-id="submitButton"]').click();
  })

});
