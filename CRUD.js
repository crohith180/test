/// <reference types="cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it('GET Operations',function(){

    cy.visit('https://staging-stack-crp-5084.riskprofiler.io/Login')
    
    // cy.contains('Asset Manager')
    // cy.location().should((loc) => {
    //     expect(loc.hash).to.eq('#/AssetManager')})
    // // cy.get('#user-edit a').click()
    // cy.url().should('include', '/users/1/edit') // => true
    // cy.url().should('eq', 'http://localhost:8000/users/1/edit')    
})