
//test cypress
describe("Test for Sprint-Challenge-Lambda-Eats-starter", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/")
    });
    it("test can add text select multiple t and submit", function () {
        cy
            .get('button[name="orderbutton"]')
            .click()
        cy
            .get('input[name="name"]')
            .type("germain")
            .should("have.value", "germain")
        cy
            .get('textarea[name="specInstr"]')
            .type("some text")
            .should("have.value", "some text")
        cy
            .get('select[name="size"]')
            .select('Large')
            .should("have.value", "large")
        cy
            .get('[type=checkbox]')
            .check()
            .should("be.checked")
        cy
            .get('button[name="submit"]')
            .click()

        //test successful 01.48
    })



})