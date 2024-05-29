import { test } from '@playwright/test';
import MainPage from '../pages/main.page.ts';
import ChartPage from '../pages/chart.page.ts';

test.use({
  viewport: { width: 1600, height: 1200 },
});

test('e2e. Technicals', async ({ page }) => {
  
  const mainPage = new MainPage(page);

  const chartPage = new ChartPage(page);

  await mainPage.goto();

  await mainPage.products.hover();

  await mainPage.superCharts.click();

  await chartPage.searchButton.click();
  
  await chartPage.searchFill('ALPHABET');

  await chartPage.pickRow(1);

  await chartPage.technicalsScreenShot();

});


