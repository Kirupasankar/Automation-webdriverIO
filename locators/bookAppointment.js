class BookAppointments {
    get bookAptBtn() {
        return $('~Book Appointment')
    }
    get bookAptPetReason() {
        return $$('android.widget.Button')
    }
    get myPetIsSick() {
        return $('~My Pet is Sick')
    }
    get reasonNotListed() {
        return $('~The Reason is Not Listed')
    }
    get reasonTextField() {
        return $('//android.widget.EditText')
    }
    get nextCTAButton() {
        return $('~Next')
    }
    get chooseVeterinarian() {
        return $('~No Preference');
    }
    get listOfVeterinarian() {
        return $$('android.view.View')
    }
    get chooseDateText() {
        return $('~Choose date')
    }
    get pickDate() {
        return $$('android.view.View')
    }
    get reviewAppointmentButton() {
        return $('~Review Appointment')
    }
}
module.exports = new BookAppointments()