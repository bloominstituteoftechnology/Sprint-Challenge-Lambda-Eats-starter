describe("First test", () => {
  it("return true", () => {});
});

describe("Text input test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Pizza");
  });

  it("testing form fields", () => {
    // Text input test
    cy.get(":nth-child(1) > input")
      .type("Luke Adams")
      .should("have.value", "Luke Adams");

    // Checkbox test
    cy.get('[name="olives"]').check().should("be.checked");
    cy.get('[name="jalapenos"]').check().should("be.checked");

    //submit

    cy.get("button").click().should("be.exist");
  });
});
