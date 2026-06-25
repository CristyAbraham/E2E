import { test, expect } from '@playwright/test';
import {search} from '../../POM/search.js'
import searchData from '../../Testdata/searchdata.json'
import Loginpage from '../../POM/Loginpage.js'
import logindata from '../../Testdata/logindata.json'
test.beforeEach(async({page})=>{
const loginPage=new Loginpage(page)
   await page.goto(searchData.url,{ waitUntil: 'domcontentloaded'})
    
   await loginPage.login(logindata.username,logindata.password)
})
test('search product and add cart',async({page})=>{
    const searchpage=new search(page)
    
  await searchpage.viewCart(searchData)
    
})
test('multiple products',async({page})=>{
const searchpage=new search(page)
await searchpage.multipleProduct(searchData)
   

})
