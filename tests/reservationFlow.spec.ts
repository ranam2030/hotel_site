import { test, expect} from '../fixtures/pomFixtures';
import { baseUrl,reservationUrl,ibisParisBerthierUrl,paymentUrl } from '../baseURL';
import  testData  from '../testData/testData.json';

test.beforeEach(async({page})=>{
    await page.goto(baseUrl);
});

test('Happy Path End_To_End Test for reservation flow', async ({ dashboardPage, detailsPage,reservationPage, page }) => {
    const dataOne = testData[0];
    const dataTwo = testData[1];
    await dashboardPage.click_On_IbisparisBerthierHotelCard();
    await expect(page).toHaveURL(ibisParisBerthierUrl);
    await detailsPage.click_On_reservationDatesPicker();
    await detailsPage.select_checkInDate();
    await detailsPage.select_checkOutDate();
    await detailsPage.set_guestAmount('2');
    await detailsPage.click_reserveBtn();
    await expect(page).toHaveURL(reservationUrl);
    await reservationPage.fill_FormOne(dataOne.Name,dataOne.Email,dataOne.PhoneNumber,dataOne.HESText,dataOne.TCTest,dataOne.Age);
    await reservationPage.fill_FormTwo(dataTwo.Name,dataTwo.Email,dataTwo.PhoneNumber,dataTwo.HESText,dataTwo.TCTest,dataTwo.Age);
    await reservationPage.click_PaymentBtn();
    const actualErrorMessageStatus = await reservationPage.verify_errorMessage();
    expect(actualErrorMessageStatus).toBeFalsy();
    await expect(page).toHaveURL(paymentUrl); 
});

