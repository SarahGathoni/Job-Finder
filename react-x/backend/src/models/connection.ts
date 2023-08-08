import  mongoose from "mongoose";

export const connectDB = async () => {
    try {
       
        await mongoose.connect(process.env.MONGO_DB_URL!, {
            connectTimeoutMS: 1000000,
            socketTimeoutMS: 1000000,
            bufferCommands: false

        });
        console.log(" Connection to the database established successfully");
    } catch (error) {
        console.log("Could not connect to the database  : ", error);
    }
};