const{test,expect}= require("@playwright/test");

test("Multiple windows handling", async ({browser}) => {
    
   const context= await browser.newContext();
   const page= await context.newPage();

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const [newPage]=  await Promise.all
    ( [
             context.waitForEvent("page") ,
              page.locator("//a[contains(text(),'OrangeHRM')]").click()

        ])
        newPage.locator("//*[@id='navbarSupportedContent']/div[2]/ul/li[1]/a/button").click();
        await page.waitForTimeout(2000);
        newPage.close();

        await page.getByPlaceholder("Username").fill("Admin");
        await page.waitForTimeout(3000);

       

    


})