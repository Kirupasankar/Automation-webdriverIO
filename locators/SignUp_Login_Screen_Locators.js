class signInOrSignUp {
    get pageswipe() {
        return $('//android.widget.ScrollView[@resource-id="com.google.android.apps.nexuslauncher:id/workspace"]')
    }
    get myVcaApp() {
        return $('~myVCA')
    }
    get createAnAccount() { return $('//android.widget.Button[@content-desc="Create an Account"]') }
    get logIn() { return $('~Already have an account?  Log In') }
}
module.exports = new signInOrSignUp()