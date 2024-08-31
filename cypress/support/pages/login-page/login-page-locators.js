module.exports = {
    datatestLogin: {
        imageCompanyLogo: '//*[@id="nava"]',
        button: (buttonType) => `//*[@type="button" and contains(text(), '${buttonType}')]`
    }
}

