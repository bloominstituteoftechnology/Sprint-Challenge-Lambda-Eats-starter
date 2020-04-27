import {v4 as uuid} from "uuid";

const username = uuid().slice(0, 5);
const topping = "bacon";
const topping2 = "beef";

describe("Friends Form", () => {
  it("can navigate to the site", () => {
    cy.visit("");
    cy.url().should("include", "localhost");
  });

  it("can submit a name", () => {
    cy.get('input[name="name"]')
      .type(username)
      .should("have.value", username);
  });

  it("can select toppings", () => {
    cy.get(`input[name="${topping}"]`)
      .check()
      .should("have.checked");

    cy.get(`input[name="${topping2}"]`)
      .check()
      .should("have.checked");
  });

  it("can submit form", () => {
    cy.contains("submit").click();
  });
});
