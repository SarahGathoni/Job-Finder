import { Schema, model } from "mongoose";

interface IJobScrapedData {
    location: string,
    jobId: number,
    company: string,
    title?: string,
    companyLink?: string,
    companyImgLink: string,
    place: string,
    date: Date,
    link: string,
    applyLink: string,
    insights: string
}

const jobSchema = new Schema<IJobScrapedData>(
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
        companyLink: {
            type: String,
            required: false,
        }, 
        companyImgLink: {
            type: String,
            required: false,
        },
        place: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            required: false,
        },
        link: {
            type: String,
            required: false,
        },
        applyLink: {
            type: String,
            required: false
        },

        insights: {
            type: String,
            required: false
        },

    },

    {
        timestamps: true
    }


);


export const DappList = model<IJobScrapedData>("DappList", jobSchema)