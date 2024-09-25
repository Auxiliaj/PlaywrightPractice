const{test,expect}= require("@playwright/test");

const LoginPage=require("../pages/loginpages");

const HomePage=require("../pages/homepage")

test("Login to Application", async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginObjt= new LoginPage(page)
    loginObjt.loginToApplication();

    await page.waitForLoadState("networkidle")

    const homepageObject= new HomePage(page)
    await homepageObject.checkmanageOption();
    await homepageObject.clickMenu();
    await loginObjt.verifySignOut();

    
    //await page.waitForTimeout(2000);

     
    
})