const{test,expect}=require("@playwright/test");

test("Successful Login",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //delay helps to slow down the typing speed
    await page.getByPlaceholder("Username").fill("Admin",{delay:300});
    await page.locator("input[name='password']").fill("admin123",{delay:200});
    await page.locator("//button[@type='submit']").click();
    
    await expect(page).toHaveURL(/dashboard/);
    //first() helps to find the first occurance of the locator
    await page.getByAltText("profile picture").first().click();
    await page.getByText("Logout").click();
    
    await expect(page).toHaveURL(/login/);

})