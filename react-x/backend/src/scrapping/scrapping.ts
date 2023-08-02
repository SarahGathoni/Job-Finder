import puppeteer from "puppeteer"

export const scrappingData = async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.linkedin.com/jobs/?originalSubdomain=ke');

        // Perform scraping using Puppeteer
        const data = await page.evaluate(() => {
            const element = document.querySelector('.some-element');
            return element!.textContent;
        });

        await browser.close();

        return data

    } catch (err) {
        console.error('Error scraping:', err);

    }
}