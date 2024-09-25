const{test,expect}=require("@playwright/test");
const path = require("path");

test("Uploading file",async function ({page}) {


    // await page.goto("https://the-internet.herokuapp.com/upload");
    // await page.locator("#file-upload").setInputFiles(path.join("./Uploads/screenshot.png"))
    // await page.locator("#file-submit").click();
    // expect( page.locator("//h3")).toHaveText("File Uploaded!");
    await page.goto("https://practice.expandtesting.com/upload");
    await page.locator("#fileInput").setInputFiles(path.join("./Uploads/screenshot.png"));
    //to remove all selected file
   // await page.locator("#fileInput").setInputFiles([]);
   await page.locator("#fileInput").setInputFiles("./Uploads/screenshot.png");
    await page.locator("#fileSubmit").click();
    expect( page.locator("//h1")).toHaveText("File Uploaded!");
    console.log("File uploaded");
    
})