import { Schema, model } from "mongoose";

interface IDataScraped {
    location: string ,
    jobId: number,
    company: string,
    title?: string,
    companyLink?: string | undefined,
    companyImgLink: string| undefined,
    place: string | undefined,
    date: Date,
    link: string | undefined,
    applyLink: string | undefined,
}

const jobSchema = new Schema<IDataScraped>(
    {
        location: {
            type: String,
            required: true,
        },
        jobId: {
            type: Number,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        title: {
            type: String,
        },
        companyLink: {
            type: String,
        }, 
        companyImgLink: {
            type: String,
        },
        place: {
            type: String,
        },
        date: {
            type: Date,
        },
        link: {
            type: String,
        },
        applyLink: {
            type: String,
        },

    },

    {
        timestamps: true
    }

);


export const JobsList = model<IDataScraped>("JobsList", jobSchema)