const{expect,test}=require("@playwright/test");

test("Finding Locators", async function ({page}) {

    await page.goto("https://demo.wpeverest.com/user-registration/guest-registration-form/");
    //css
    await page.locator("#first_name").fill("Rose");

    

    
})