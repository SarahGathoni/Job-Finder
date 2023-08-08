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



module.exports = router;