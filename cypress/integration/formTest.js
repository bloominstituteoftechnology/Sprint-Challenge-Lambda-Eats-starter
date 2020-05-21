describe("Test form inputs", () => {
    before(()=>{
        cy.visit("localhost:3000/pizza");
    });
    it("Input name into the name field", () =>{
        cy.get('input[name="name"]')
            .type("Daniel Payne")
            .should("have.value","Daniel Payne");
        cy.pause();
    })
    it("Testing check boxes", () =>{
        cy.get('input[name="pepperoni"]')
            .check()
            .should("be.checked");
        cy.get('input[name="onions"]')
            .check()
            .should("be.checked");
        cy.get('input[name="sausage"]')
            .check()
            .should('be.checked');
        cy.get('input[name="pineapple"]')
            .check()
            .should('be.checked');
        cy.pause();
    });
    it("Testing special instructions", () => {
        cy.get('textarea[name="instructions"]')
            .type("This is an automated test of the special instructions")
            .should('have.value',"This is an automated test of the special instructions");
        cy.pause();
    });

    it("test submit button on form", () => {
        cy.get('form').submit();
    })
})

