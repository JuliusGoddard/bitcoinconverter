/* eslint-disable no-undef */
describe('Bitcoin App', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Current Prices')
    cy.contains('GBP')
  })

  it('converter returns number,', function() {
    cy.visit('http://localhost:3000')
    cy.get('select').select('GBP')
    cy.get('#amount').type('100')
    cy.get('#convert-button').click()
    cy.contains(0)
  })
})