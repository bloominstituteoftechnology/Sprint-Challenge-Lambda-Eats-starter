describe('testing', function(){
    beforeEach(function(){
    cy.visit('http://localhost:3000/pizza')
     })
     it('tests name input', function(){
         cy.get('[data-cy=name]').type('Testing name out')
     })
     it('tests checkboxs', function(){
         cy.get('[data-cy=checkbox1').check().should('be.checked')
     })
     it('tests checkboxs', function(){
        cy.get('[data-cy=checkbox2').check().should('be.checked')
    })
    it('tests checkboxs', function(){
        cy.get('[data-cy=checkbox3').check().should('be.checked')
    })
    it('tests checkboxs', function(){
        cy.get('[data-cy=checkbox4').check().should('be.checked')
    })
    it('test submit', function(){
        cy.get('[data-cy=submit]').submit()
    })
})