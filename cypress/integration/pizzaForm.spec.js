//test that you can add text to the box
//test that you can select multiple toppings
//test that you can submit the form

describe('Form input', ()=>{

    it('can navigate to the site',()=>{
        cy.visit('http://localhost:3000/pizzaForm')
    })
//test that you can add text to the box
    it('can add name to the input box',()=>{
        cy.get('input[name="name"]')
        .type("wei peluso")
        .should('have.value','wei peluso')
    })

    //test that you can select multiple toppings
    it('can select on topping', ()=>{
        cy.get('input[name="pepperoni"]')
        .check()
        .should('be.checked')

    })
    it('can select another topping', ()=>{
        cy.get('input[name="sausage"]')
        .check()
        .should('be.checked')

    })

    //test that you can submit the form

    it('can select the size', ()=>{
        cy.get('select[name="size"]')
        .select('Small')
    })

    //click order button form submit and the form inputs are cleared
    it('can submit the form',()=>{
        cy.get('button').click()
       

    })

    it('check if order page has the info',()=>{
        cy.get('p').contains('wei peluso')
    })
})