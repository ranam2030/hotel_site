import { Locator, Page } from "@playwright/test";

export class dashboardPage {
    readonly page:Page;
    private readonly ibisParisBerthierHotelCard:Locator;
    
    constructor(page:Page){

        this.ibisParisBerthierHotelCard = page.getByText(' Ibis Paris Berthier ').nth(0);
      
    }

    async click_On_IbisparisBerthierHotelCard(){
        await this.ibisParisBerthierHotelCard.click();
    }
   
    
}