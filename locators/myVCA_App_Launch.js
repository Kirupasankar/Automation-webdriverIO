const signInOrSignUpLocatorss = require('../locators/SignUp_Login_Screen_Locators')
class appLaunch {
    myVCAAppLaunch = async () => {
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 573, y: 1714 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 1000, x: 573, y: 400 },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
        (await signInOrSignUpLocatorss.myVcaApp).click();
    }
}
module.exports = new appLaunch();