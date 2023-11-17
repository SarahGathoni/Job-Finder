import * as express from 'express';
import { JobsList } from '../models/model';
const router = express.Router();
const userDB = require("../models/userModel");
//const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

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

// REGISTER ROUTE
router.post('/register', async (req, res) => {
    const { firstName, lastName, email,  password } = req.body;

    // Check if required fields are provided
    if (  !password || !firstName || !lastName || !email) {
        return res.status(400).json({ "message": "All fields are required" });
    }

    try {
        // Check for duplicate usernames in DB
        const duplicate = await userDB.findOne({ firstName: firstName });
        if (duplicate) {
            return res.status(409).json({ "message": "Username already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = new userDB({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            confirmpassword:hashedPassword
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user data
        res.status(201).json(savedUser); // 201 indicates resource created successfully
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ "message": "Internal Server Error" });
    }
});
module.exports = router;