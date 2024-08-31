const locators = require('../home-page/home-page-locators');
const { faker }  = require('@faker-js/faker');
const staticVars = require('../static-variables')

class homePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html', {
            timeout: 120000 // Increase the visit timeout to 120 seconds
        });
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }
//verify user can click sign up button
    clickSignUpMenu() {
        cy.xpath('//*[@id="signin2"]').click();
    }
// verify sign up page appears and user can fill in at sign up form
    verifySignUpModalAppears() {
        cy.xpath('//*[@id="signInModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    fillUsername(username) {
        if (username == 'random') {
            username = faker.person.firstName() + faker.number.int() + '@test.com'
        }
        cy.wait(5000);
        cy.xpath('//*[@id="sign-username"]', { timeout: 1000 }).should('be.visible');
        cy.xpath('//*[@id="sign-username"]', { timeout: 5000}).type(username);
    }

    fillPassword(password) {
        cy.xpath('//*[@id="sign-password"]').type(password);
    }
// after user filled sign up form, verify user can click sign up button
    clickSignUpButton() {
        cy.xpath(locators.datatestid.button('Sign up')).click();
    }

    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }
// verify error message appear because empty or not valid
    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds)
    }

    verifyUserAlreadyExistsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.user_alr_exists)
    }
//verify user successfully sign up with data valid
    verifySignUpSuccessMessageAppears() {
        this.verifyAlertAppears(staticVars.success_message.signup)
    }

    signUp(username, password) {
        if (username != '') {
            this.fillUsername(username);
            this.fillPassword(password);
        }
        this.clickSignUpButton()
    }

}

module.exports = new homePage();
