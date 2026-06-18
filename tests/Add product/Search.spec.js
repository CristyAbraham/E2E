import { test, expect } from '@playwright/test';
import {search} from '../../POM/search.js'
import searchData from '../../Testdata/searchdata.json'
import {Loginpage} from '../../POM/Loginpage.js'
import logindata from '../../Testdata/logindata.json'
test('search product and add cart',async({page})=>{
    const searchpage=new search(page)
    const loginPage=new Loginpage(page)
   await page.goto(searchData.url,{ waitUntil: 'domcontentloaded'})
    
   await loginPage.login(logindata.username,logindata.password)
  await searchpage.viewCart(searchData)
    
    
})
test('multiple products',async({page})=>{
await page.goto("https://automationexercise.com/signup")
    await page.locator("//input[@data-qa='login-email']").fill('ira@mailinator.com')
    await page.locator("//input[@placeholder='Password']").fill("Ira@123")
    await page.getByRole('button',{name:'Login'}).click()
    await page.locator("//a[@href='/products']").click()
    await page.getByPlaceholder('Search Product').fill("dress")
    await page.locator("//button[@id='submit_search']").click()

   await page.locator("//p[contains(text(),'Stylish Dress')]/ancestor::div[@class='product-image-wrapper']//a[contains(text(),'View Product')]").click()
    await page.locator(".btn.btn-default.cart").click()
    await page.getByRole('button',{name:'Continue Shopping'}).click()
    await page.locator("//a[@href='/products']").click()
    await page.locator("(//p[normalize-space()='Summer White Top'])[1]").scrollIntoViewIfNeeded();
    await page.locator("//p[text()='Summer White Top']/ancestor::div[@class='productinfo text-center']//a[contains(text(),'Add to cart')]").click()
    //const product = await page.locator('.product-image-wrapper', {hasText: 'Summer White Top'});
    //await product.locator('text=Add to cart').click();
    await page.locator("//a[text()=' Logout']").click()
    

})
