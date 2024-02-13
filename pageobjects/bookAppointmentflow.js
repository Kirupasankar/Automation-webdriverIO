const bookAppointmentsLocators = require('../locators/bookAppointment');

class BookAppointmentsFlow {
    async tapBookAptsCTA() {
        (await bookAppointmentsLocators.bookAptBtn).waitForClickable({ timeout: 5000 });
        return (await bookAppointmentsLocators.bookAptBtn).click();
    }

    async getBookAppointmentReason() {
        try {
            const bookAptPetReasonList = await bookAppointmentsLocators.bookAptPetReason;
            const actualList = await Promise.all(
                bookAptPetReasonList.map(item => item.getAttribute('content-desc'))
            );
            console.log(actualList[1]);
        } catch (error) {
            console.error("Error occurred getting tapping book appointment reason:", error);
        }
    }
    async tapReasonsinList() {
        (await bookAppointmentsLocators.myPetIsSick).waitForClickable({ timeout: 5000 });
        return (await bookAppointmentsLocators.myPetIsSick).click()
    }
    async tapReasonsinList2() {
        (await bookAppointmentsLocators.reasonNotListed).waitForClickable({ timeout: 5000 })
        return (await bookAppointmentsLocators.reasonNotListed).click()
    }
    async reasonTextField() {
        try {
            (await bookAppointmentsLocators.reasonTextField).waitForClickable({ timeout: 10000 });
            return (await bookAppointmentsLocators.reasonTextField).click();
        } catch (error) {
            console.log(error);
        }
    }
    async enterReasonText(value) {
        return (await bookAppointmentsLocators.reasonTextField).addValue(value);
        // await browser.waitUntil(async () => {
        //     return 
        // }, { timeout: 5000 })
    }
    async nextCTAButton() {
        (await bookAppointmentsLocators.nextCTAButton).waitForClickable({ timeout: 4000 });
        return (await bookAppointmentsLocators.nextCTAButton).click()
    }
    async chooseVeterinarian() {
        (await bookAppointmentsLocators.chooseVeterinarian).waitForClickable({ timeout: 15000 })
        return (await bookAppointmentsLocators.chooseVeterinarian).click()
    }
    async listOfVeterinarian(doctor) {
        await browser.pause(5000);
        const veterinarians = await bookAppointmentsLocators.listOfVeterinarian;
        const listOfVeterinarian = await Promise.all(veterinarians.map(async (item) => {
            return await item.getAttribute('content-desc');
        }));
        console.log(listOfVeterinarian)
        let flag = false;
        for (let i = 0; i < listOfVeterinarian.length; i++) {
            if (listOfVeterinarian[i] == doctor) {
                await veterinarians[i].click();
                flag = true;
                break;
            }
        }
        if (!flag) {
            await veterinarians[0].click();
        }

    }
    async chooseDateText() {
        return (await bookAppointmentsLocators.chooseDateText).isDisplayed();
    }
    async pickDate() {
        try {
            let dates = await bookAppointmentsLocators.pickDate;
            let enabledDates = await Promise.all(dates.map(async (dateElement) => {
                if (await dateElement.isEnabled()) {
                    return await dateElement.getAttribute('content-desc');
                }
            }));
            console.log(enabledDates)
            for (let i = 0; i < dates.length; i++) {
                if (await dates[13].isEnabled()) {
                    await dates[13].click();
                    await dates[18].click()
                    break;
                }
            }
        } catch (error) {
            console.error("Error occurred while picking a date:", error);
        }
    }
    async scrolltoElement() {
        //(await bookAppointmentsLocators.reviewAppointmentButton).scrollIntoView();
        return (await bookAppointmentsLocators.reviewAppointmentButton).scrollIntoView(false);
    }
    async clickReviewCTAButton() {
        (await bookAppointmentsLocators.reviewAppointmentButton).waitForClickable({ timeout: 10000 });
        return (await bookAppointmentsLocators.reviewAppointmentButton).click();
    }
    async bookappointmentCTAButton() {
        return (await bookAppointmentsLocators.bookappointmentCTAbutton).click();
    }
    async acceptAlert() {
        return await browser.acceptAlert();
    }
}
module.exports = new BookAppointmentsFlow();
