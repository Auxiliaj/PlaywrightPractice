const {test,expect} = require("@playwright/test");

test("Auto Complete with keyboard events", async ({page}) =>{

    await page.goto("https://www.google.co.in/");
    await page.locator("textarea[name='q']").fill("Selenium");

    await page.waitForSelector("(//ul[@role='listbox'])[1]/li");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Enter");


})


test.skip("Auto complete with loop", async ({page}) =>{

    await page.goto("https://www.google.co.in/");
    await page.locator("textarea[name='q']").fill("Playwright");
    await page.waitForSelector("(//ul[@role='listbox'])[1]/li");

    const elements= await page.$$("(//ul[@role='listbox'])[1]/li"); 
    for(let i=0;i<elements.length;i++){

        const text=await elements[i].textContent();
        if(text.includes ('documentation')){
            await elements[i].click();
            await page.waitForTimeout(3000);
           // break;
        }
    }

})