describe('Form Inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/PizzaForm')
    })
    it('can type a name', () => {
        cy.get('input[name="name"]')
        .type('nathan')
    })
    it('can select multiple toppings', () => {
        cy.get('input[name="chicken"]').click()
        cy.get('input[name="peppers"]').click()
        cy.get('input[name="pineapple"]').click()
    })
    
})

describe('submitting Form', () => {
    it('can sumbit form data', () => {
        cy.visit('http://localhost:3000/PizzaForm')
        
        cy.get('input[name="name"]')
        .type('nathan')

        cy.get('select').select('medium')

        cy.get('input[name="chicken"]').click()
        cy.get('input[name="peppers"]').click()
        cy.get('input[name="pineapple"]').click()

        cy.get('textarea')
        .type('No further instructions for you guys, just get me my pizza.')
        
        cy.get('button').click()
    })
})