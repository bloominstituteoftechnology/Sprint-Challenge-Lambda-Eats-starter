describe('Testing our form inputs', () => {
    beforeEach(function () {
        //runs before each test in this block
        cy.request("https://reqres.in/api/users");
    });

    it("Input Name into the Name Input", () => {
        cy.get('input[name="name"]')
        .type("Stephen Goodrick")
        .should("have.value", "Stephen Goodrick");
    });

    it("Able to select Multiple Toppings", () => {
        cy.get('[type="checkbox"]').check(['pepperoni', 'sausage', 'onion'])
    });

    it('Able to Submit a Form', () => {
        cy.get('.action-form')
          .find('[type="text"]').type('HALFOFF')
        cy.get('.action-form').submit()
          .next().should('contain', 'Your form has been submitted!')
      });  
});