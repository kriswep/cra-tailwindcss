describe('The App should be styled', function() {
  it('successfully loads styled', function() {
    cy.visit('/');
    cy.matchImageSnapshot();
  })
})