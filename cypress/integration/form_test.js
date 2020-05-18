describe("Form Testing", () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000/")
  });

  it("Input name into the name input", () => {
    cy.get('#name')
    .type("Emilio Crocco")
    .should("have.value", "Emilio Crocco")