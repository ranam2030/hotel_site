import { Locator, Page } from "@playwright/test";

export class detailsPage {
    readonly page:Page;
    private readonly reservationDatesPicker:Locator;
    private readonly checkDate:Locator;
    private readonly currentDateBtn:Locator;
    private readonly targetDateBtn:Locator;
    private readonly okBtn:Locator;
    private readonly addGuestAmount:Locator;
    private readonly reserveBtn:Locator;
    
    constructor(page:Page){

        this.reservationDatesPicker = page.getByLabel('Reservation Dates');
        this.checkDate = page.locator('#input-62');
        const currentDate = new Date().getDate().toString();
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2);
        const targetDay = targetDate.getDate().toString();
        this.currentDateBtn = page.getByRole('button', { name: currentDate }).nth(1);
        this.targetDateBtn = page.getByRole('button', { name: targetDay });
        this.okBtn = page.getByRole('button', { name: 'OK' });
        this.addGuestAmount = page.getByRole('button').nth(3);
        this.reserveBtn = page.getByRole('button', { name: 'Reserve' });
    }

    async click_On_reservationDatesPicker(){
        await this.reservationDatesPicker.click();
        await this.checkDate.click();
    }
    async select_checkInDate(){
        await this.currentDateBtn.click();
        await this.okBtn.click();
    }
    async select_checkOutDate(){
        await this.reservationDatesPicker.click();
        await this.targetDateBtn.click();
        await this.okBtn.click();
    }
    async set_guestAmount(amount:string){
        const targetAmount = parseInt(amount, 10);
        let currentAmount = 0;
        while (currentAmount < targetAmount) {
            await this.addGuestAmount.click(); 
            currentAmount++; 
        }
    }
    async click_reserveBtn(){
        await this.reserveBtn.click();
    }
   
    
}