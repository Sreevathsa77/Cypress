describe('Sauce Demo Login', () => {
    it('should log in successfully with valid credentials', () => {
      // Visit the website
      cy.visit('https://www.saucedemo.com/');
  
      // Input the username
      cy.get('#user-name').type('standard_user'); // Replace 'standard_user' with the desired username
  
      // Input the password
    //   cy.get('#password').type('secret_sauce'); // Replace 'secret_sauce' with the desired password
  
    //   // Click on the login button
    //   cy.get('#login-button').click();
  
      cy.url().should('include', '/inventory.html'); // Checking if the URL includes '/inventory.html' after login
    });
  });
  