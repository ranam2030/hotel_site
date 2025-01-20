import {test as baseTest} from '@playwright/test';
import { dashboardPage } from '../tests/page/dsahboardPage';
import { detailsPage } from '../tests/page/hotelDetailsPage';
import { reservationPage } from '../tests/page/reservationPage';

type pages = {
    dashboardPage: dashboardPage,
    detailsPage: detailsPage,
    reservationPage: reservationPage
}

export const testPages = baseTest.extend<pages>({
    dashboardPage:async ({page},use) => {
        await use(new dashboardPage(page));
    },
    detailsPage:async ({page},use) => {
        await use(new detailsPage(page));
    },
    reservationPage:async ({page},use) => {
        await use(new reservationPage(page));
    }
})
export const test = testPages;
export const expect = testPages.expect;