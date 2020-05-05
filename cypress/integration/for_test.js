// describe === context, it === specify, beforeEach

describe('test our form inputs', function () {
	beforeEach(function () {
		cy.visit('http://localhost:3000/pizza');
	});
	it('textarea', function () {
		cy.get('[data-cy="textarea"]')
			.type('This is working')
			.should('have.value', 'This is working');
		cy.get('[type="checkbox"').check().should('be.checked');
		cy.contains('Submit').click();
	});
});
