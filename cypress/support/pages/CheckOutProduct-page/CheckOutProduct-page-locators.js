module.exports = {
    datatestCheckProduct: {
        imageCompanyLogo: '//*[@id="nava"]',
        button: (buttonType) => `//*[@type="button" and contains(text(), '${buttonType}')]`
    }
}

