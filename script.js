const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  

  await page.goto('https://www.google.com/');

  await page.waitForSelector('textarea[name="q"]');

  await page.type('textarea[name="q"]', 'Rakib Hasan Bappy');

  await page.keyboard.press('Enter');

  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  const searchResults = await page.evaluate(() => {
    const results = [];
    const items = document.querySelectorAll('div.g');
    items.forEach(item => {
      const title = item.querySelector('h3')?.innerText;
      const link = item.querySelector('a')?.href;
      if (title && link) {
        results.push({ title, link });
      }
    });
    return results;
  });


  console.log(searchResults);

  await browser.close();
})();