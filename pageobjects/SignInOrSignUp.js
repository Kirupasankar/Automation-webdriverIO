const signInOrSignUpLocators = require('../locators/SignUp_Login_Screen_Locators')

class signInOrSignUpScreen {
    verifyCreateAnAccountBtn = async () => {
        browser.waitUntil(async () => {
            return (await signInOrSignUpLocators.createAnAccount).isDisplayed();
        }, {
            timeout: 20000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        expect(await signInOrSignUpLocators.createAnAccount).toHaveText("Create An Account")
    }
    async verifyLogInBtn() {
        browser.waitUntil(async () => {
            return (await signInOrSignUpLocators.logIn).isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        expect(await signInOrSignUpLocators.logIn).toHaveText('Already have an account?  Log In')
    }
    async verifyLogIn() {
        (await signInOrSignUpLocators.logIn).waitForClickable({ timeout: 5000 });
        await signInOrSignUpLocators.logIn.click();
    }
}
module.exports = new signInOrSignUpScreen()