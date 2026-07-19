import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly emailTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;
    readonly emailBlankInlineError: Locator;
    readonly passwordBlankInlineError: Locator;
    constructor(private page: Page) {

        this.emailTextBox =
            page.getByPlaceholder('Your email');

        this.passwordTextBox =
            page.getByPlaceholder('Your password');

        this.loginButton =
            page.getByRole('button', { name: 'Login' }); 
        
        this.emailBlankInlineError=
            page.getByText('Email is required');

        this.passwordBlankInlineError=
            page.getByText('Password is required');

    }

    async open() {
    await this.page.goto('https://practicesoftwaretesting.com');
    await this.page.getByRole('link', { name: 'Sign in' }).click();
    await this.page.waitForURL(/login/)
}

    async login(email:string, password:string){
        await this.emailTextBox.fill(email);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }

    async validateLoginBlankInlineError(){
        await this.page.waitForURL(/login/);
        await expect(this.emailBlankInlineError).toBeVisible();
        await expect(this.passwordBlankInlineError).toBeVisible();
        
    }



}