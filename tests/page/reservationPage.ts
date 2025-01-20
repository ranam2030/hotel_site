import { Locator, Page } from "@playwright/test";

export class reservationPage {
    readonly page:Page;
    private readonly nameOneInputField:Locator;
    private readonly nameTwoInputField:Locator;
    private readonly emailOneInputField:Locator;
    private readonly emailTwoInputField:Locator;
    private readonly phoneNumberOneInputField:Locator;
    private readonly phoneNumberTwoInputField:Locator;
    private readonly hesOneInputField:Locator;
    private readonly hesTwoInputField:Locator;
    private readonly tcOneInputField:Locator;
    private readonly tcTwoInputField:Locator;
    private readonly ageOneInputField:Locator;
    private readonly ageTwoInputField:Locator;
    private readonly goToPaymentBtn:Locator;
    private readonly errorMessage:Locator;
    
    constructor(page:Page){
        this.nameOneInputField = page.locator('#input-114');
        this.nameTwoInputField = page.locator('#input-133');
        this.emailOneInputField = page.locator('#input-117');
        this.emailTwoInputField = page.locator('#input-136');
        this.phoneNumberOneInputField = page.locator('#input-120');
        this.phoneNumberTwoInputField = page.locator('#input-139');
        this.hesOneInputField = page.locator('#input-123');
        this.hesTwoInputField = page.locator('#input-142');
        this.tcOneInputField = page.locator('#input-126');
        this.tcTwoInputField = page.locator('#input-145');
        this.ageOneInputField = page.locator('#input-129');
        this.ageTwoInputField = page.locator('#input-148');
        this.goToPaymentBtn = page.getByRole('button', { name: 'Go to Payment' });
        this.errorMessage = page.getByText('Please fill form as excepted');
    }

    async fill_FormOne(name:string,email:string,phoneNumber:string,hes:string,tc:string,age:string){
        await this.nameOneInputField.fill(name);
        await this.emailOneInputField.fill(email);
        await this.phoneNumberOneInputField.fill(phoneNumber);
        await this.hesOneInputField.fill(hes);
        await this.tcOneInputField.fill(tc);
        await this.ageOneInputField.fill(age);
    }
    async fill_FormTwo(name:string,email:string,phoneNumber:string,hes:string,tc:string,age:string){
        await this.nameTwoInputField.fill(name);
        await this.emailTwoInputField.fill(email);
        await this.phoneNumberTwoInputField.fill(phoneNumber);
        await this.hesTwoInputField.fill(hes);
        await this.tcTwoInputField.fill(tc);
        await this.ageTwoInputField.fill(age);
    }
    async click_PaymentBtn(){
        await this.goToPaymentBtn.click();
    }
    async verify_errorMessage(){
        return await this.errorMessage.isVisible();
    }
   
    
}