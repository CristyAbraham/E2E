import { test, expect } from '@playwright/test';
import logindata from '../../Testdata/logindata.json'
import { loginpage, LoginPage } from '../../POM/loginpage.js';
import invalid_login from '../../Testdata/invalidlogindata.json'
import console from 'node:console';




test('existing user loginlogout',async({page})=>{
    let loginpage=new loginpage(page)
    await page.goto(logindata.url)
   await loginpage.login(logindata.username,logindata.password)
await loginpage.logout()
    

})
test('invalid flow',async({page})=>{
    let loginpage=new loginpage(page)
await page.goto(invalid_login.url)
await length
const errortext=await expect (page.getByText('Your email or password is incorrect!')).toBeVisible()
console.log(errortext)
//p[normalize-space()='Your email or password is incorrect!']
})