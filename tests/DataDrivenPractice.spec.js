const {expect,test} = require("@playwright/test");

 const testdata = JSON.parse(JSON.stringify( require("../testlogin.json")))


 test.describe("Data Driven Login Test", function () {

    for( const data of testdata){

        test.describe(`Login with Data ${data.id}`,function () {
            test("Application Login", async function ({page}) {
    
                await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
                await page.getByPlaceholder("Username").fill(data.username);
                await page.getByPlaceholder("Password").fill(data.password);
            
            })
         
            
        });
         
         }

    
 });

