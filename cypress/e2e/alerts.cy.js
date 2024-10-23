describe("Alerts" , ()=>{


    it.skip('JS Alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert', (alert)=>{
            expect(alert).to.contains("I am a JS Alert")
        })
        cy.get('#result').should('contain.text', "You successfully clicked an alert")
    })

    it.skip('JS Confirm Alert - OK', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get('button[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (alert)=>{
            expect(alert).to.contains("I am a JS Confirm")
        })
        cy.get('#result').should('contain.text', "You clicked: Ok")
    })

    it.skip('JS Confirm Alert - Cancel', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get('button[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', ()=> false)
        cy.get('#result').should('contain.text', "You clicked: Cancel")
    })

    it.skip('JS Prompt - Ok', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.get('#result').should('contain.text', "You entered: Welcome")
    })

    it.skip('Authenticated Pop -Up ', ()=>{

        // Approach 1 
        
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{
            auth: {
                username : "admin",
                password : "admin"
            }
        })

        cy.get('.example>p').invoke('text').then((text) => {
            expect(text.trim()).to.eq('Congratulations! You must have the proper credentials.');
          });
          

        // cy.get('.example>p').should('have.text',"Congratulations! You must have the proper credentials.")

        // Approach 2 -> Concate user and pass in beginning of url followed by @ and continue url

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")


        // cy.get('.example>p').should('have.text',"Congratulations! You must have the proper credentials.")

        cy.get('.example>p').invoke('text').then((text) => {
            expect(text.trim()).to.eq('Congratulations! You must have the proper credentials.');
          });
          
    })
})