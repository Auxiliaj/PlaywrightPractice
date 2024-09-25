const {test,expect}=require("@playwright/test");
test.use({viewport:{width:1100,height:670},});

test("Verify Error message",async function ({page}) {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log( await page.viewportSize().width);
    console.log( await page.viewportSize().height);

    await page.getByPlaceholder("Username").fill("Admin");

    await page.locator("input[name='password']").fill("Admin1234");

    await page.locator("//button[normalize-space()='Login']").click();
  
    const errorMsg=await page.locator("//div[contains(@class,'content--error')]").textContent();
    console.log(errorMsg);
    
    expect(errorMsg.includes('Invalid')).toBeTruthy();

    expect(errorMsg==='Invalid credentials').toBeTruthy();
})