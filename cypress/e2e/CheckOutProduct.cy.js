const CheckOutProductPage = require('../support/pages/CheckOutProduct-page/CheckOutProductPage');

describe('Checkout Product', () => {

  beforeEach(() => {
    // pre step
    CheckOutProductPage.goToHomePage();
  });

  it('should checkout successfully', () => {
    CheckOutProductPage.goToHomePage()
    CheckOutProductPage.verifyHomePageAppears()
    CheckOutProductPage.selectProduct('Nokia lumia 1520')
    CheckOutProductPage.verifyAddToCart()
    CheckOutProductPage.verifyClickCartMenu();
    CheckOutProductPage.verifyclickPlaceOrderButton();
    CheckOutProductPage.fillNameField();
    CheckOutProductPage.fillCountryField();
    CheckOutProductPage.fillCityField();
    CheckOutProductPage.fillCardField();
    CheckOutProductPage.fillMonthField();
    CheckOutProductPage.fillYearField();
    CheckOutProductPage.verifyClickPurchaseButton();
    CheckOutProductPage.verifySuccessfulCheckOut()
  });
});