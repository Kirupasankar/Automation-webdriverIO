const loginPageLocator = require('../locators/loginPageLocator')
class CarouselActions {
    async performCarouselSwipe() {
        try {
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: 1050, y: 1034 },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 1000 },
                        { type: 'pointerMove', duration: 1000, x: 10, y: 1034 },
                        { type: 'pointerUp', button: 0 }
                    ],
                },
            ]);
        }
        catch (error) {
            console.error();
        }
    }
    tapCarouselNextBtn = async () => {
        (await loginPageLocator.carouselNextBtn).waitForClickable({ timeout: 5000 });
        (await loginPageLocator.carouselNextBtn).click()
    }
}
module.exports = new CarouselActions();