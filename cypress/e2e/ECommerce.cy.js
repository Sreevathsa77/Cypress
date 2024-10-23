describe('E Commerce Pracrice', ()=>{
    it('URL', ()=>{

        const url = "https://rahulshettyacademy.com/seleniumPractise/#/"
        cy.visit(url);
        const url1 = cy.url();
        console.log(url1);
        cy.url().should('include', "rahulshettyacademy").should('contain','seleniumPractise').and('eq', "https://rahulshettyacademy.com/seleniumPractise/#/");


        cy.xpath("//h4[contains(text(),'Brocolli')]/parent::div/child::div[@class='product-action']/child::button").click();
        cy.get("a.cart-icon").click();
        cy.xpath("(//div[@class='action-block']/button)[1]").click();

        const productName = "[class='product-name']"
        cy.get(productName).should('contain', "Beetroot")
    })
})