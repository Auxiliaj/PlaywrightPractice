const{test,expect}=require("@playwright/test");



test("Dropdown interaction",async function ({page}) {
    await page.goto("https:freelance-learn-automation.vercel.app/signup");

    

    const dropDown=  page.locator("#state");
    //select dropdown by label
    await dropDown.selectOption({label:"Goa"});
   // await page.waitForTimeout(2000);
    //select dropdown  by value
    await dropDown.selectOption({value:"Bihar"});
   // await page.waitForTimeout(2000);
    //select dropdown by index
    await dropDown.selectOption({index:7});
   // await page.waitForTimeout(2000);

    const value= await dropDown.textContent();
    expect (value.includes("Puducherry")).toBeTruthy();
    //console.log(value);
    let values=await page.$("#state");

    let allElements= await values.$$("option");
    let status=false;
    for(let i=0;i<allElements.length;i++){
      
        let singleValue=await allElements[i].textContent();
        console.log(singleValue);
        
        if(singleValue.includes("Tamil Nadu")){
            status=true;
            break;
        }

       
    }

    expect (status).toBeTruthy();

    let multiDropdown=  page.locator("#hobbies");
    multiDropdown.selectOption(['Reading','Dancing']);
    await page.pause();
   // await page.waitForTimeout(7000);
    
})