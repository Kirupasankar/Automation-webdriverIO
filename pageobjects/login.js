const loginUserNameLocator = require('../locators/loginPageLocator')
class loginpom {
    loginUserName = async (userName) => {
        (await loginUserNameLocator.userName).waitForClickable({ timeout: 5000 });
        (await loginUserNameLocator.userName).click();
        (await loginUserNameLocator.userName).addValue(userName)
        await browser.pause(3000)
        await browser.hideKeyboard('tapOutside');
        await browser.pause(3000)
    }
    loginPassword = async (pwd) => {
        (await loginUserNameLocator.passWord).waitForClickable({ timeout: 5000 });
        (await loginUserNameLocator.passWord).click();
        (await loginUserNameLocator.passWord).addValue(pwd)
        await browser.pause(3000)
        await browser.hideKeyboard('tapOutside');
        await browser.pause(3000)
    }
    loginButton = async () => {
        (await loginUserNameLocator.loginBtn).waitForClickable({ timeout: 5000 });
        (await loginUserNameLocator.loginBtn).click();
        // await browser.pause(15000);
    }
}
module.exports = new loginpom();