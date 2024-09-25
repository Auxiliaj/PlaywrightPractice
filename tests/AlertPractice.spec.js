const{test,expect}=require('@playwright/test');


test("Normal Alert",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
       page.on('dialog',async(d) =>{
        expect(d.type()).toContain("alert");
        expect(d.message()).toContain("I am a JS Alert");
        await d.accept();

    })
    await page.locator("//button[text()='Click for JS Alert']").click();

    let text=await page.locator("#result").textContent();
    console.log(text);
    
})

test("Confirm Alert",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog',async(dialogue) => {
        expect(dialogue.type()).toContain("confirm");
        expect(dialogue.message()).toContain("I am a JS Confirm");
        //await dialogue.dismiss();
        await dialogue.accept();
    })
    await page.locator("//button[text()='Click for JS Confirm']").click();

    let text=await page.locator("#result").textContent();
    console.log(text);
})

test("Prompt Alert",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog',async(dialogueBox) =>{
        expect(dialogueBox.type()).toContain('prompt');
        expect(dialogueBox.message()).toContain("I am a JS prompt");
        await dialogueBox.accept("Alert text");
    })
    await page.locator("//button[text()='Click for JS Prompt']").click();
let text=await page.locator("#result").textContent();
console.log(text);
})

