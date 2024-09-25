const{expect}=require("@playwright/test")
class LoginPages {
    constructor(page) {
        this.page=page
        this.username="#email1"
        this.password="#password1"
        this.loginButton="//button[text()='Sign in']"
        this.signIn="//h2[contains(text(),'Sign In')]"
    }

    async loginToApplication() {

        await this.page.fill(this.username,"admin@email.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginButton)
    }

    async verifySignOut(){

        await expect(this.page.locator(this.signIn)).toBeVisible();
         
    }

}
module.exports= LoginPages;