describe("Assertions" , ()=>{
    it('', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").and('contain', 'demo')

        cy.get('[placeholder="Username"]').type("Admin");

        cy.get('[placeholder="Username"]').should('have.value',"Admin")
    })
})