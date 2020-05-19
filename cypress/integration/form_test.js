
    describe("first test", () => {
        it("Should return true" , () =>{
           expect(true).to.equal(true);
        });
        });
    describe("testing form inputs", () =>{
        beforeEach(function() {
            // runs before each test in this block
            cy.visit("http://localhost:3000");
          });
        
        it("Click Get Started", () =>{
            cy.get('a')
            .click()
            
           
    });
    
})
describe("second test", ()=>{
    it("should test form", () =>{
        cy.get('[name="name"]')
        .type("Mustafa")
        .should("have.value", "Mustafa")
    })
    it("can select multiple topping", () =>  {
        cy.get('[name="cheese"]')
        .check()
    })
    it("can select multiple topping", () =>  {
        cy.get('[name="beef"]')
        .check()
    })
    it("can select multiple topping", () =>  {
        cy.get('[name="chicken"]')
        .check()
    })
    it("can select multiple topping", () =>  {
        cy.get('[name="gyros"]')
        .check()
    })
    it("can summit form", ()=>{
        cy.get('button')
        .click()
    })
    describe("3rd test", ()=>{
        it("go to last page",() =>{
            cy.get('.OTW > :nth-child(1)')
        })
    })
})