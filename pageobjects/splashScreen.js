const { expect } = require('@wdio/globals')
const splashScreen = require('../locators/Splash_Screen_Locator')

class splash_Screen {
    verifyMyVcaLogo = async () => {
        expect(await splashScreen.myVcaAppLogo).toBeDisplayed();
    }
    verifyWomenWithDogChevronLogo = async () => {
        expect(await splashScreen.womenWithDogChevronLogo).toBeClickable();
    }
}
module.exports = new splash_Screen();
