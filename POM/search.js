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
    //add multiple product
   this.continue= page.getByRole('button',{name:'Continue Shopping'})
    this.searchprod2= page.locator("//a[@href='/products']")
    this.dress2view= page.locator("(//p[normalize-space()='Summer White Top'])[1]")
    this.dress2click= page.locator("//p[text()='Summer White Top']/ancestor::div[@class='productinfo text-center']//a[contains(text(),'Add to cart')]")
    //const product = await page.locator('.product-image-wrapper', {hasText: 'Summer White Top'});
    //await product.locator('text=Add to cart').click();
    this.exit= page.locator("//a[text()=' Logout']")
    }
    async viewCart(data){
        await this.searchbar.click();
        await this.searchprod.fill(data.search)
        await this.searchbtn.click()
        await this.product.click()
        await this.productclick.click()
        await this.viewcart.click()
        await this.exit.click()
    }
    async multipleProduct(data){

        await this.searchbar.click();
        await this.searchprod.fill(data.search)
        await this.searchbtn.click()
        await this.product.click()
        await this.productclick.click()
        //await this.viewcart.click()
        await this.continue.click()
        await this.searchprod2.click()
        await this.dress2view.scrollIntoViewIfNeeded();
        await this.dress2click.click()
        await this.viewcart.click()
        await this.exit.click()

    }
}