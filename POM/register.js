import { expect } from "@playwright/test";

export class register
{
    constructor(page)
    {
this.page=page;
this.name=page.getByPlaceholder("Name")
this.email=page.locator("//input[@data-qa='signup-email']")
this.regbtn=page.getByRole('button',{name:'Signup'})
this.title=page.locator("(//label[@class='top'])[2]")
this.namee=page.locator("//input[@type='password']")
this.day= page.locator("//select[@id='days']")
this.month=page.locator("//select[@id='months']")
this.year=page.locator("//select[@id='years']")
this.firstname= page.locator("#first_name")
this.lastname= page.locator('#last_name')
this.company= page.locator('#company')
this.address= page.locator("#address1")
this.address2= page.locator("#address2")
this.country= page.locator("//select[@id='country']")
this.state= page.locator("#state")
this.city= page.locator("#city")
this.zipcode=page.locator("#zipcode")
this.mobilenumber= page.locator("#mobile_number")
this.createbutton=page.getByRole('button',{name:'Create Account'})
//await expect(page).toHaveURL("https://automationexercise.com/account_created")
this.sucessmessage= page.getByText("Congratulations! Your new account has been successfully created!")
this.createacnt= page.locator("//a[@class='btn btn-primary']")

    }
    
    async signup(name,email){
        await this.name.fill(name)
        await this.email.fill(email)
        await this.regbtn.click()
    }
    async fillRegistrationform(data){
await this.title.click()
await this.namee.fill(data.namee)
await this.day.selectOption(data.day)
await this.month.selectOption({ label: data.month });
        await this.year.selectOption(data.year);

        await this.firstname.fill(data.firstname);
await this.lastname.fill(data.lastname);
await this.company.fill(data.company);
await this.address.fill(data.address1);
await this.address2.fill(data.address2);

        await this.country.selectOption(data.country);

        await this.state.fill(data.state);
await this.city.fill(data.city);
await this.zipcode.fill(data.zipcode);
await this.mobilenumber.fill(data.mobile);
    }
    async createAccount(){
        await this.createbutton.click()
    }
    async verifyAccountCreated(){
        await expect (this.sucessmessage).toBeVisible()
    }
    async continueAccount(){
        await this.createacnt.click()
    }
}