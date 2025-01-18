// test/e2e/e2e.spec.js
const puppeteer = require('puppeteer');

describe('Calculator E2E Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // או URL של האתר המתאים
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display the correct sum', async () => {
    await page.type('#num1', '3');
    await page.type('#num2', '2');
    await page.click('button[type="submit"]');
    const result = await page.$eval('#result', el => el.textContent);
    expect(result).toBe('The sum is: 5');
  });
});
