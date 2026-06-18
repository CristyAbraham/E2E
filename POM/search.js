export class search
{
    constructor(page){
        this.page=page;
        //srearch product and add cart
        this.searchbar=page.locator("//a[@href='/products']")
        //div[@class='continue-prompt-text']
        this.searchprod= page.getByPlaceholder('Search Product')
        this.searchbtn= page.locator("//button[@id='submit_search']")

    this.product= page.locator("//p[contains(text(),'Stylish Dress')]/ancestor::div[@class='product-image-wrapper']//a[contains(text(),'View Product')]")
    this.productclick= page.locator(".btn.btn-default.cart")
    this.viewcart= page.locator("//u[text()='View Cart']")
    }
    async viewCart(data){
        await this.searchbar.click();
        await this.searchprod.fill(data.search)
        await this.searchbtn.click()
        await this.product.click()
        await this.productclick.click()
        await this.viewcart.click()

        
    }
}