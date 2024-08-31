const locators = require('../home-page/home-page-locators');

class CheckOutProduct {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }
// verify user can select product
    selectProduct() {
        cy.xpath('//a[text()="Nokia lumia 1520"]').scrollIntoView().should('be.visible').click();
    }
// verify selected product goes into the chart
    verifyAddToCart() {
      cy.window().then((win) => {
        const stub = cy.stub(win, 'alert').as('alertStub');
        // Perform actions that trigger the alert
        cy.xpath("//h2[contains(text(), 'Nokia lumia 1520')]").should('be.visible');
        cy.xpath("//a[contains(text(), 'Add to cart')]").click();
        // Wait for the alert to be triggered and assert
        cy.get('@alertStub').should('be.calledWith', 'Product added');
      });
    }
//verify user go to cart menu for checkout product
    verifyClickCartMenu() {
        cy.xpath('//a[text()="Cart"]', { timeout: 10000 }).should('be.visible').click();
    }
//verify user can click place order button to fill in the data form 
    verifyclickPlaceOrderButton() {
        cy.xpath('//button[text()="Place Order"]').should('be.visible').click();
    }

    fillNameField() {
        cy.xpath('//input[@id="name"]').should('be.visible').type('maula');
    }

    fillCountryField() {
        cy.xpath('//input[@id="country"]').should('be.visible').type('Indonesia');
    }

    fillCityField() {
        cy.xpath('//input[@id="city"]').should('be.visible').type('Jakarta');
    }

    fillCardField() {
        cy.xpath('//input[@id="card"]').should('be.visible').type('1234567812345678');
    }

    fillMonthField() {
        cy.xpath('//input[@id="month"]').should('be.visible').type('6');
    }

    fillYearField() {
        cy.xpath('//input[@id="year"]').should('be.visible').type('2024');
    }
//After the data is filled in, verify user can click on the purchase menu 
    verifyClickPurchaseButton() {
        cy.xpath('//button[text()="Purchase"]').should('be.visible').click();
    }
//verify user get success message
    verifySuccessfulCheckOut(){
        cy.get('.sweet-alert').should('be.visible');
        
        // Verify the success message in the alert
        cy.get('.sweet-alert').contains('Thank you for your purchase!').should('be.visible');
        
        // Optionally, you can verify that the alert has a "OK" button
        cy.get('.sweet-alert').contains('OK').should('be.visible');
    
    }
}

  module.exports = new CheckOutProduct();
  