describe('Drop Down Handling', ()=>{

    it.skip('Drop Down Handling Select Tag', ()=>{
        
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#country").select("India").should('have.value', "india")
        cy.get("#country").select("Brazil").should('have.value', "brazil")

    })

    it.skip('Drop Down Handling Auto Suggestive', ()=>{

        cy.visit("https://www.wikipedia.org/");
        cy.get('#searchInput').type('Bengaluru Bulls')
        // cy.xpath('//*[@class="suggestion-text"]/h3').contains('Bengaluru Bulls').click();
        cy.get(".suggestion-title").contains('Bengaluru Bulls').click();

    })

    it('Drop Down Handling Auto Suggestive', ()=>{

        cy.visit("https://www.google.com/");
        cy.get('[title="Search"]').type("Bengaluru Bulls")
        cy.wait(3000)
        cy.get('[class="wM6W7d"]>span').each(($ele , index , $list)=>{
            if($ele.text()==="Bengaluru Bulls"){
                cy.wrap($ele).click();
            }
        })
        cy.wait(3000)
        const text = cy.get("[aria-controls='Alh6id']").should('have.text', "bengaluru bulls")   
        // expect(text).to.equal("Bengaluru Bulls")   

    })

})