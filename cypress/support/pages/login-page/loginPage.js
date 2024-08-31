const locators = require('../login-page/login-page-locators');
const { faker }  = require('@faker-js/faker');
const staticVars = require('../static-variables')

class loginPage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestLogin.imageCompanyLogo).should('be.visible');
    }
// verify user can click login button
    clickLoginMenu() {
        cy.xpath('//*[@id="login2"]').click();
    }
//verify login page appears and user can fill in login form
    verifyLoginModalAppears() {
       // cy.xpath('//*[@id="logInModalLabel"]', { timeout: 1000 }).should('be.visible');
       
       cy.xpath('//*[@id="logInModal"]', { timeout: 15000 }) // Increase timeout if needed
       .should('have.css', 'opacity', '1')
       .then(() => {
           cy.xpath('//*[@id="logInModalLabel"]')
               .should('be.visible');
       });
    }

    fillUsername(username) {
        if (username === 'random') {
            username = faker.person.firstName() + faker.number.int() + '@test.com';
        }
    
        // Assume the login username field will be visible without an explicit wait
        cy.xpath('//*[@id="loginusername"]', { timeout: 5000 })
            .should('be.visible')
            .clear()
            .type('random');
    }

    fillPassword(password) {
        cy.xpath('//*[@id="loginpassword"]').type(password);
    }

    clickLoginButton() {
        cy.xpath(locators.datatestLogin.button('Log in')).click();
    }

    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }
// verify error message appear because login with unregistered account or empty
    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds)
    }

    verifyUserAlreadyExistsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.user_alr_exists)
    }
//verify user successfully login with valid data
    verifyLoginSuccessMessageAppears() {
        this.verifyAlertAppears(staticVars.success_message.signup)
    }
// verify user can see web with welcome 'name username'  
    verifyWelcomeMessageAppears(){
        cy.get('body').should('not.contain', 'login failed');
        cy.xpath('//*[@id="nameofuser"]').should('be.visible');
    }
    login(username, password) {
        if (username != '') {
            this.fillUsername(username);
            this.fillPassword(password);
        }
    this.clickLoginButton()
    }
}

module.exports = new loginPage();