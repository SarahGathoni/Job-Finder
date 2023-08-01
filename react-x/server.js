// server.js
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/jobs/?originalSubdomain=ke');

    // Perform scraping using Puppeteer
    const data = await page.evaluate(() => {
      const element = document.querySelector('.some-element');
      return element.textContent;
    });

    await browser.close();
    res.send(data);
  } catch (err) {
    console.error('Error scraping:', err);
    res.status(500).send('Error scraping data.');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
