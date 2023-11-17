import express from "express";
import dotEnv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./models/connection";


//connect to the database here
connectDB()
// Setting up express app
const app = express();

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173',
  };
  

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));


// app.use((err: any, req: any, res: any, next: any) => {
//   console.error(err.stack);
//   res.status(500).json({
//       error: 'Internal Server Error'
//   });
// });


// Routes
app.use("/", require("./routes/routes"));
// Listening for requests
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

  

