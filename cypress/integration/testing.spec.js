/// <reference types="cypress" />

describe("Home Page", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should click on pizza? button and take me to a /pizza", function () {
    cy.get('[data-test-id="homePizzaButton"]').click().url("http://localhost:3000/pizza");
  });
});

describe("Example", function () {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
  
    it("should add text to the box", function () {
      cy.get('[name="name"]').type("Annemarie").should("have.value", "Annemarie");
    });
  
    it("should allow me to select multiple sauces", function () {
      cy.get('[data-test-id="selectSauce"]').click({ multiple: true }).should("be.checked");
    });

    it("should allow me to submit pizza order", function () {
        cy.get('[name="name"]').type("Annemarie");
        cy.get('[data-test-id="selectSauce"]').click({ multiple: true });
        cy.get('[data-test-id="bestToppings"]').click({ multiple: true });
        cy.get('[name="instructions"]').type("Cook pizza upside down");
        cy.get('[data-test-id="submitButton"]').click();
      });
  
  });
