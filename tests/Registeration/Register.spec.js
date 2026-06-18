import { test, expect } from '@playwright/test';
import logindata from '../../Testdata/logindata.json'
import { Loginpage } from '../../POM/Loginpage.js';
import invalid_login from '../../Testdata/invalidlogindata.json'

test('existing user loginlogout',async({page})=>{
    let loginpage=new Loginpage(page)
    await page.goto(logindata.url)
   await loginpage.login(logindata.username,logindata.password)
    await loginpage.logout()
    

})
test('invalid flow',async({page})=>{
    let loginpage=new Loginpage(page)
await page.goto(invalid_login.url)
const errortext=await expect (page.getByText('Your email or password is incorrect!')).toBeVisible()
console.log(errortext)
//p[normalize-space()='Your email or password is incorrect!']
})