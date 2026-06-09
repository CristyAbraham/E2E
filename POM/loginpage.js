export class loginpage
{
    constructor(page){
        this.page=page;
        this.emailinput=page.locator("//input[@data-qa='login-email']")
        this.passwordInput=page.locator("//input[@placeholder='Password']")
        this.loginbutton=page.getByRole('button',{name:'Login'})
        this.logoutbtn= page.locator("//a[text()=' Logout']").click()
        this.title=page.getByRole('button',{name:'Signup'}).click()
        
    }
    async login(user,pass){
await this.emailinput.fill(user)
await this.passwordInput.fill(pass)
await this.loginbutton.click()
    }
    async logout(){
await this.logoutbtn.click()
    }
    async invalidlogin(user,pass){
        await this.emailinput.fill(user)
        await this.passwordInput.fill(pass)
        await this.loginbutton.click()
    }
    async registration(){

    }
}