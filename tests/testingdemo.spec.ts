import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
let loginPage: LoginPage;
let homePage: HomePage;
test.describe("Login Feature", () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.open();
    });
    test ('Positive - Login Until Homepage', async ({ page }) =>{
        await loginPage.login('customer2@practicesoftwaretesting.com','welcome01');
        await homePage.navigateHome();

});

    test ('Negative - Login Blank Information', async ({ page }) =>{
        await loginPage.login('','');
        await loginPage.validateLoginBlankInlineError();
    });

});

test.describe("Sort Feature", () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.open();
        await loginPage.login('customer2@practicesoftwaretesting.com','welcome01');
        await homePage.navigateHome();
    })
    test ('Positive - Test Sort Ascending', async ({ page }) =>{
        await homePage.sortBy('name,asc');
        await homePage.verifyAscending();
    });

    test ('Positive - Test Sort Descending', async ({ page }) =>{
        await homePage.sortBy('name,desc');
        await homePage.verifyDescending();
});
});

// test.describe("Checkout Feature", () => {
//     test.beforeEach(async ({ page }) => {
//         await loginPage.open();
//         await loginPage.login('customer2@practicesoftwaretesting.com','welcome01');
//         await homePage.open();    

//     })
//     test ('Positive - Checkout Success', async ({ page }) => {
        
    

// });


// })




