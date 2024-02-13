const splashScreenPom = require('../pageobjects/splashScreen')
const signInOrSignUpScreenPom = require('../pageobjects/SignInOrSignUp')
const myVCAAppLaunchAction = require('../locators/myVCA_App_Launch')
const loginUserNameAndPassword = require('../pageobjects/login')
const carousel = require('../pageobjects/cauroselAction')
const performCarouselSwipe = require('../helper/performSwipe')
const bookAppointments = require('../pageobjects/bookAppointmentflow')
const bookAppointmentsLocators = require('../locators/bookAppointment')

describe("Log In and Carousel", async function () {
    before(async () => {
        await myVCAAppLaunchAction.myVCAAppLaunch();
        //await signInOrSignUpScreenPom.verifyCreateAnAccountBtn();
        //await signInOrSignUpScreenPom.verifyLogInBtn();
        // await splashScreenPom.verifyMyVcaLogo();
        // await splashScreenPom.verifyWomenWithDogChevronLogo();
        await signInOrSignUpScreenPom.verifyLogIn()

    });

    // after(async () => {
    //     await browser.execute('mobile: terminateApp', {
    //         appId: 'com.vca.careclub'
    //     });
    // })

    it("Verify the Log In", async function () {
        await loginUserNameAndPassword.loginUserName('testkirupa@101.com');
        await loginUserNameAndPassword.loginPassword('Test123456');
        await loginUserNameAndPassword.loginButton();
        await browser.pause(15000);
    })
    it('Verify the carousel', async () => {
        try {
            const timeoutDuration = 14000;
            const timeoutMsgs = ['Carousel 1', 'Carousel 2', 'Carousel 3', 'Carousel 4'];
            for (let i = 0; i < timeoutMsgs.length; i++) {
                await browser.waitUntil(async () => {
                    return (await carousel.performCarouselSwipe());
                }, {
                    timeout: timeoutDuration,
                    timeoutMsg: timeoutMsgs[i]
                });
            }
        }
        catch (error) {
            console.error(error);
        }
        await carousel.tapCarouselNextBtn()
        // performanceDataTypes = async () => {
        //     return await driver.getPerformanceDataTypes();
        // }
        // performance = async () => {
        //     return (await driver.getPerformanceData('com.vca.careclub', 'cpuinfo', 5))
        // }
        // await performance();
    })
    it('Verify the Book Appointment Reason Selection Flow', async () => {
        await bookAppointments.tapBookAptsCTA();
        await bookAppointments.getBookAppointmentReason();
        await bookAppointments.tapReasonsinList();
        await performCarouselSwipe.performSwipe(515, 515, 2076, 555);
        await bookAppointments.tapReasonsinList2();
        await performCarouselSwipe.performSwipe(515, 515, 1593, 350);
        await bookAppointments.reasonTextField();
        await bookAppointments.enterReasonText('Test')
        await browser.hideKeyboard('tapOutside');
        await bookAppointments.nextCTAButton();
    })
    it('Verify the Book Appointment Review Screen', async () => {
        await bookAppointments.chooseVeterinarian();
        await bookAppointments.listOfVeterinarian('Dr. Stephanie Cherrier');
        await bookAppointments.chooseDateText();
        await bookAppointments.pickDate();
        //await bookAppointments.scrolltoElement()
        await performCarouselSwipe.performSwipe(524, 524, 2166, 362);
        await bookAppointments.clickReviewCTAButton();
        await performCarouselSwipe.performSwipe(524, 524, 1928, 859);
        await bookAppointments.bookappointmentCTAButton();
        //await bookAppointments.acceptAlert();
    })
});
//
// 