const{test,expect} = require("@playwright/test");

test("Frame Handling", async ({page}) => {
    
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const iframe= page.frameLocator("//iframe[@name='globalSqa']");
     await iframe.locator("(//div[@id='portfolio_items']//div//img)[1]").click();

    

})