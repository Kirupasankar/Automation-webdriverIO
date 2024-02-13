class login {
    get userName() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[3]')
    }
    get passWord() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[4]')
    }
    get loginBtn() {
        return $('~Log In')
    }
    get carouselNextBtn() {
        return $('~Close')
    }
}
module.exports = new login();