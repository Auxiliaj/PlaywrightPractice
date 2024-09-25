const {test,expect}= require("@playwright/test");

const testdata =JSON.parse( JSON.stringify( require("../testdata.json")))

test("Application Login", async function ({page}) {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill(testdata.username);
    await page.getByPlaceholder("Password").fill(testdata.password);
    await page. pause();

})