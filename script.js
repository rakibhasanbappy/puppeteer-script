const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  

  await page.goto('https://www.google.com/');

  await page.waitForSelector('input[name="q"]');

  await page.type('textarea[name="q"]', 'hello world');

//   await browser.close();
})();