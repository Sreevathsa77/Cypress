describe('Radio Button And Check Box' , ()=>{
    it('Radio Button' , ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        const male = "#male"
        const female = "#female"

        cy.get(female).check().should('be.checked');
        cy.get(male).should('not.be.checked')

        cy.get(male).check().should('be.checked');
        cy.get(female).should('not.be.checked')

    })

    it('Check Box', ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        const checkBoxXpath = '//label[@for="days"]/parent::div/child::div/child::input';

        cy.xpath(checkBoxXpath).check().should('be.checked');
        cy.xpath(checkBoxXpath).uncheck().should('not.be.checked');

        cy.xpath(checkBoxXpath).first().check().should('be.checked')
        cy.xpath(checkBoxXpath).last().check().should('be.checked')


    })
})