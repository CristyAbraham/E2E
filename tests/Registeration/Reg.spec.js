import { test, expect } from '@playwright/test';
import registerData from '../../Testdata/registerData.json'
import {register} from '../../POM/register.js'
test('Success register', async ({ page }) => {
const registerpage = new register(page);
   await page.goto(registerData.url);
const email = `user${Date.now()}@mailinator.com`;
//await expect (page.locator("#name")).toHaveValue("venu")
//await expect(page.locator("#email")).toHaveValue("thanu@mailinator.com")
await registerpage.signup(
        registerData.name,
        email
    );

    await registerpage.fillRegistrationform(registerData);

    await registerpage.createAccount();

    await registerpage.verifyAccountCreated();

    await registerpage.continueAccount();

});



