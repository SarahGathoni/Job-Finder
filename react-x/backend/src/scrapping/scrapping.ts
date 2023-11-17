import {
    LinkedinScraper,
    relevanceFilter,
    timeFilter,
    typeFilter,
    experienceLevelFilter,
    onSiteOrRemoteFilter,
    events,
} from 'linkedin-jobs-scraper';
import { JobsList } from '../models/model';
import { connectDB } from '../models/connection';

connectDB();

(async () => {
    // Each scraper instance is associated with one browser.
    // Concurrent queries will run on different pages within the same browser instance.
    const scraper = new LinkedinScraper({
        headless: true, //did the magic initially it was off
        slowMo: 200,
        args: [
            "--lang=en-GB",
        ],
    });

    // Add listeners for scraper events
    scraper.on(events.puppeteer.browser.targetcreated, () => {

    });
    scraper.on(events.puppeteer.browser.targetchanged, () => { });
    scraper.on(events.puppeteer.browser.targetdestroyed, () => { });
    scraper.on(events.puppeteer.browser.disconnected, () => { });

    // Emitted once for each processed job
    scraper.on(events.scraper.data, async (data) => {


        console.log(
            data.description.length,
            data.descriptionHTML.length,
            `Query='${data.query}'`,
            `Location='${data.location}'`,
            `Id='${data.jobId}'`,
            `Title='${data.title}'`,
            `Company='${data.company ? data.company : "N/A"}'`,
            `CompanyLink='${data.companyLink ? data.companyLink : "N/A"}'`,
            `CompanyImgLink='${data.companyImgLink ? data.companyImgLink : "N/A"}'`,
            `Place='${data.place}'`,
            `Date='${data.date}'`,
            `Link='${data.link}'`,
            `applyLink='${data.applyLink ? data.applyLink : "N/A"}'`,
            `insights='${data.insights}'`,
        );

        const {
            location,
            jobId,
            company,
            title,
            companyLink,
            companyImgLink,
            place,
            date,
            link,
            applyLink
         } = data

        //consider saving this data to the database directly when scrapint  
        const scrapeddata = new JobsList(
            {
                location,
                jobId,
                company,
                title,
                companyLink,
                companyImgLink,
                place,
                date,
                link,
                applyLink
            }
        ) 

        await scrapeddata.save()

        console.log("Saved to Database", scrapeddata)

    });

    // Emitted once for each scraped page
    scraper.on(events.scraper.metrics, (metrics) => {
        console.log(`Processed=${metrics.processed}`, `Failed=${metrics.failed}`, `Missed=${metrics.missed}`);
    });

    scraper.on(events.scraper.error, (err) => {
        console.error(err);
    });

    scraper.on(events.scraper.end, () => {
        console.log('All done!');
    });

    //Custom function executed on browser side to extract job description [optional]
    const descriptionFn = () => {
        const description = document.querySelector<HTMLElement>(".jobs-description");
        return description ? description.innerText.replace(/[\s\n\r]+/g, " ").trim() : "N/A";
    }

    // Run queries concurrently    
    await Promise.all([
        // Run queries serially
        scraper.run([
            {
                query: "FrontEnd Developer",
                options: {
                    locations: ["United Kingdom"], // This will override global options ["Europe"]
                    filters: {
                        type: [typeFilter.FULL_TIME, typeFilter.CONTRACT],
                        onSiteOrRemote: [onSiteOrRemoteFilter.REMOTE, onSiteOrRemoteFilter.HYBRID],
                    
                    },
                }
            },
            {
                query: "Data Science",
                options: {
                    pageOffset: 2, // How many pages to skip. Default 0
                    limit: 5, // This will override global option limit (33)
                    applyLink: true, // Try to extract apply link. If set to true, scraping is slower because an additional page mus be navigated. Default to false
                    skipPromotedJobs: true, // Skip promoted jobs: Default to false
                    descriptionFn: descriptionFn, // Custom job description processor [optional]
                }
            },
            {
                query: "Procurement officer",
                options: {
                    pageOffset: 2, // How many pages to skip. Default 0
                    limit: 5, // This will override global option limit (33)
                    applyLink: true, // Try to extract apply link. If set to true, scraping is slower because an additional page mus be navigated. Default to false
                    skipPromotedJobs: true, // Skip promoted jobs: Default to false
                    descriptionFn: descriptionFn, // Custom job description processor [optional]
                } 
            }
        ], { // Global options, will be merged individually with each query options
            locations: ["Kenya", "USA"],
            limit: 30,
        }),
    ]);


    // Close browser
    await scraper.close();
})();