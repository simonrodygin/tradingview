import { Page, expect } from '@playwright/test';

class MainPage {
    private page: Page;
    public products;
    public superCharts;

   
    
    constructor(page: Page) {
        this.page = page;
        this.products = this.page.locator('[data-main-menu-root-track-id="products"]');
        this.superCharts = this.page.locator('[data-main-menu-dropdown-track-id="Supercharts"]');
    };

    async goto() {
        await this.page.goto('https://www.tradingview.com/', { waitUntil: 'domcontentloaded' });
    }

}

export default MainPage;