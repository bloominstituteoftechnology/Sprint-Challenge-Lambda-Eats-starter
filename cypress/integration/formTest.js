describe("Testing the Pizza form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/component/pizza_form");
  });
    it("Add test to inputs and submit form", function() {
      cy
      .get('input[name="name"]')
      .type("Lisa")
      .should("have.value", "Lisa")
      cy
      .get('textarea[name="instructions"]')
      .type("some text")
      .should("have.value", "some text")
      cy
      .get('select[name="sizes"]')
      .select('small')
      .should("have.value", "small")
      cy
      .get('[type=checkbox]')
      .check()
      .should("be.checked")
      cy
      .get('button[name="submit"]')
      .click()
    });

    it("No toppings no instructions", function() {
      cy
      .get('input[name="name"]')
      .type("Timmy")
      .should("have.value", "Timmy")
      cy
      .get('select[name="sizes"]')
      .select('small')
      .should("have.value", "small")
      cy
      .get('button[name="submit"]')
      .click()

    });
});
