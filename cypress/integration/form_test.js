describe('Test our inputs and submit our form', function() {
    beforeEach(function() {
      //test will always visit localhost first before any other test runs
      cy.visit('http://localhost:3000/pizza');
    });
    it('Add test to inputs and submit form', function() {
cy.get('input[name="name"]')
.type("Denis")
.should('have.value', "Denis")

cy.get('select[name="pizza_size"]')
.select('S')
.should('have.value', "S")

cy.get('[type="checkbox"]')
      .check()
      .should('be.checked');

cy.get('textarea')
      .type('Leave on front Porch')
      .should('have.value', 'Leave on front Porch');
      cy.get('button').click();
    })
});