const{test,expect}= require("@playwright/test");

test("Keyboard events in playwright", async function ({page}) {

    await page.goto("https://www.google.co.in/");
    //enter
    await page.locator("textarea[name='q']").fill("Switzerland");
    //await page.keyboard.press("Enter");
    //multiple keys
    //clearing search field using backspace
    // await page.keyboard.press("Control+A");
    // await page.keyboard.press("Backspace");
    //deleting search field
   // await page.keyboard.press("Delete");

   //clearing half of the text in search box

   for(let i=0;i<6;i++){
    await page.keyboard.down("Shift");
    await page.keyboard.press("ArrowLeft");
   

   }
    await page.keyboard.up("Shift");
    await page.keyboard.press("Backspace");





})