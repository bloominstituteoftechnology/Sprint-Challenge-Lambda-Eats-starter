describe('Testing our form inputs', () => {
    beforeEach(function () {
        //runs before each test in this block
        cy.visit("http://localhost:3000/pizza");
    });

    it("Input Name into the Name Input", () => {
        cy.get('input[name="name"]')
        .type("Stephen Goodrick")
        .should("have.value", "Stephen Goodrick");
    });

    it("Able to select Multiple Toppings", () => {
        cy.get('[type="checkbox"]').check()
    });

    it('Able to Submit a Form', () => {
        cy.get("form").submit()
      });  
});