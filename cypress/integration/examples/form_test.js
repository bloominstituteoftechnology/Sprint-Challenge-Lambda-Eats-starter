/*global cy*/

describe("Testing our form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("adds texts to inputs and submits form", function () {
    cy.get('[data-cy="name"]').type("Emily").should("have.value", "Emily");
    cy.get('[data-cy="size"]').select("Medium").should("have.value", "Medium");
    cy.get('[type="radio"]').check("original");
    cy.get('[type="checkbox"]').check();
    cy.get("textarea")
      .type("please send my pizza")
      .should("have.value", "please send my pizza");

    cy.get("button").click({ multiple: true });
  });
});
