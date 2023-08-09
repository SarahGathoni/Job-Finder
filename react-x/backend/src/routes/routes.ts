import * as express from 'express';
import { JobsList } from '../models/model';
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
router.get("/scrapper-info", async (req: any, res: any) => {
    try {
        
        //querry the database to find a collection for scrapeddata
        const allData = await JobsList.find().lean();

        res.send({ message: "successfully retrieved the data", data: allData })

    } catch (error) {
        console.log("Unable to retrived-data", error)
    }
});



module.exports = router;