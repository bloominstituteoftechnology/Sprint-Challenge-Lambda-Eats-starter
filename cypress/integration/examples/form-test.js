describe('FOrm - testing our form inputs', function() {

    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })


    it("add test to inputs and submit form", function () {
        cy.get('[data-cy="name"]')
        .type("Jay")
        .should('have.value', "Jay")

        cy.get('[data-cy="sizeSelect"]').select('Medium')

       cy.get('[type="checkbox"]').check().should('be.checked')

       cy.get('[data-cy="orderNotes"]')
       .type("Please apply 1/2 off coupon to my order. Thank you!")
       .should('have.value', "Please apply 1/2 off coupon to my order. Thank you!")

       cy.get('[data-cy="submit"').click();


    });
});