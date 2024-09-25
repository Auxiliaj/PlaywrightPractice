const {test,expect}=require("@playwright/test");

test("Mouse Hover",async function ({page}) {
    

    await page.goto("https://stqatools.com/demo/MouseHover.php");

    await page.locator(".dropbtn").hover();
    await page.locator("//a[contains(text(),'Link 1')]").click();
    let msg=await page.locator("//div[contains(text(),'You click on Dropdown hover Option')]");
    expect(msg).toBeTruthy();
    

})