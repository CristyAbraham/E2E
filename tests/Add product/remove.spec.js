
import { test, expect } from '@playwright/test';
test('remove products',async({page})=>{
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
})