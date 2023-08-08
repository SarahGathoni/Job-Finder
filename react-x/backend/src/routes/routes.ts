import * as express from 'express';
const router = express.Router();

//home route
router.get("/", async (req: any, res: any) => {
    try {
        res.send("Welcome to FinderJobs api huraay🚀🚀🚀");

    } catch (error) {
        console.log("Unable to connect to home route", error)
    }
});

//route to get the data from our database
// router.get("/retrived-data", async (req: any, res: any) => {
//     try {
//         const { data } = req.body
//         //email and password
//         //querry the database to find a collection for scrapeddata
//         const allData = await ScrapedData.find({ data });

//         res.send({ message: "successfully retrieved the data", data: data })



//     } catch (error) {
//         console.log("Unable to retrived-data", error)
//     }
// });

//route to post/save data to our database
// router.post("/scrape-data", async (req: any, res: any) => {
//     try {

//         //got the scraped data frpm pupeeter
//         let scrape = await scrappingData()
//         scrape = req.body
//         //check if there is data in scrape
//         if (scrape) {
             
//             const saveData = new ScrapedData({
//                 scrape,
//             }).save()

//             res.send({
//                 message: "successfully save to db"
//             })
//         }

//     } catch (error) {
//         console.log("Unable to scrape-data", error)
//     }
// })


module.exports = router;