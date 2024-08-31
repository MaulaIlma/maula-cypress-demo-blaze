const loginPage = require('../support/pages/login-page/loginPage')

describe("Login", () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html', {
            timeout: 120000 // Increase the visit timeout to 120 seconds
        });
        
        
    });

    it("with unregistered data", () => {
        loginPage.goToHomePage()
        loginPage.verifyHomePageAppears()
        loginPage.clickLoginMenu()
        loginPage.verifyLoginModalAppears()
        loginPage.login('', '21122')
        loginPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        loginPage.goToHomePage()
        loginPage.verifyHomePageAppears()
        loginPage.clickLoginMenu()
        loginPage.verifyLoginModalAppears()
        loginPage.login('', '21122')
        loginPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with registered data", () => {
        loginPage.goToHomePage()
        loginPage.verifyHomePageAppears()
        loginPage.clickLoginMenu()
        loginPage.verifyLoginModalAppears()
        loginPage.login('random', '21122')
        loginPage.verifyLoginSuccessMessageAppears()
        loginPage.verifyWelcomeMessageAppears();
    });
    //it('should display welcome message after login', () => {
        //const loginPage = new LoginPage();
        //loginPage.login('user', 'password');
        //loginPage.verifyWelcomeMessageAppears();
    //});
})
