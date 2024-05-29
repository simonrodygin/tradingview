import { Page, expect } from '@playwright/test';

class ChartPage {
    private page: Page;
    public searchButton;
    public searchInput;
    private rowSearch;
    public technicals;
    public detailsButton;
    
   
    
    constructor(page: Page) {
        this.page = page;
        this.searchButton = this.page.locator('[id="header-toolbar-symbol-search"]');
        this.searchInput = this.page.locator('[data-name="symbol-search-items-dialog"] > div:nth-child(2) > div > input');
        this.technicals = this.page.locator('[data-name="details-technicals"]');
        this.detailsButton = this.page.locator('[data-tooltip="Watchlist, details and news"]');
    };

    async goto() {
        await this.page.goto('https://www.tradingview.com/chart/');
    };

    async searchFill(search: String) {
        await this.searchInput.fill(`${search}`);

        await this.page.waitForSelector(`[data-overflow-tooltip-text*="${search}"]`);
    }
    
    async pickRow(rowNumber: Number) {
        this.rowSearch = this.page.locator(`[data-name="symbol-search-dialog-content-item"]:nth-child(${rowNumber})`);
        await this.rowSearch.click();
        
        // перепробовал много разных ожиданий, это оказалось самым эффективным
        await this.detailsButton.click();
        await this.detailsButton.click();
    };

    async technicalsScreenShot() {
        await this.technicals.scrollIntoViewIfNeeded();
        await expect(this.page.locator('[data-name="details-technicals"]')).toHaveScreenshot({ maxDiffPixels: 100 });
    }

    
}

export default ChartPage;