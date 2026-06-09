import { test, expect } from '@playwright/test';
test('search product and add cart',async({page})=>{
    await page.goto("https://automationexercise.com/signup")
    await page.locator("//input[@data-qa='login-email']").fill('ira@mailinator.com')
    await page.locator("//input[@placeholder='Password']").fill("Ira@123")
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator("//a[@href='/products']").click()
    await page.getByPlaceholder('Search Product').fill("dress")
    await page.locator("//button[@id='submit_search']").click()

   await page.locator("//p[contains(text(),'Stylish Dress')]/ancestor::div[@class='product-image-wrapper']//a[contains(text(),'View Product')]").click()
    await page.locator(".btn.btn-default.cart").click()
await page.locator("//u[text()='View Cart']").click()
const checkout= page.locator(".btn.btn-default.check_out")
await checkout.scrollIntoViewIfNeeded();
await checkout.click();
const placeorder= page.locator(".btn.btn-default.check_out")
await placeorder.scrollIntoViewIfNeeded()
await placeorder.click()
await page.waitForURL("https://automationexercise.com/payment")
await page.locator("//input[@name='name_on_card']").fill("Cristy")
await page.locator("//input[@name='card_number']").fill("67543217")
await page.locator("//input[@name='cvc']").fill("876")
await page.locator("//input[@name='expiry_month']").fill("05")
await page.locator("//input[@name='expiry_year']").fill("2028")
await page.locator("#submit").click()
})