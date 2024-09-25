const{expect}=require("@playwright/test")

class HomePage{
    constructor(page){
        
        this.page=page
        this.manageoption="//span[contains(text(),'Manage')]"
        //this.manageoption="//span[contains(text(),'Manage')]"
        this.menu="//img[@alt='menu']"
        this.signout="//button[contains(text(),'Sign out')]"
     

    }
    async checkmanageOption(){
      
       await expect(this.page.locator (this.manageoption)).toBeVisible();
        //  let text=await this.page.locator("//button[@class='cartBtn']").textContent();
        //   console.log(text);
          //await expect(this.page.locator(this.manageoption)).toBeVisible();

          // (this.page.locator(this.manageoption))
          //.toBeVisible());
    }

    async clickMenu(){
         
        await this.page.click(this.menu)
        await this.page.click(this.signout)
    }

  
}

module.exports=HomePage;