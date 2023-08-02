// const main = async () => {
//     try {

//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();
//         // Navigate the page to a URL
//         await page.goto('https://developer.chrome.com/');

//         // Set screen size
//         await page.setViewport({ width: 1080, height: 1024 });

//         // Type into search box
//         await page.type('.search-box__input', 'whats new in devtools chrome 105');

//         // Wait and click on first result
//         const searchResultSelector = '.search-box__result';
//         await page.waitForSelector(searchResultSelector);
//         await page.click(searchResultSelector);

//         // Locate the full title with a unique string
//         const textSelector = await page.waitForSelector(
//             'text/Customize and automate'
//         );

//         await page.waitForNavigation({ waitUntil: "domcontentloaded" })

//         console.log("Heey we got here");

//         const fullTitle = await textSelector?.evaluate(el => el.textContent);

//         // Print the full title
//         console.log('The title of this blog post is "%s".', fullTitle);

//         //save this data on a database

//         await browser.close();


//     } catch (error) {
//         console.log("Unable to scrape data", error)
//     }
// }

// main()
