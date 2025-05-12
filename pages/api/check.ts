import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const instance = axios.create({
    baseURL: process.env.SERVICE_URL,
    withCredentials: true
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const request = await instance.get(`${process.env.SERVICE_URL}/check`)
        const response = await request.data;
        return res.status(request.status).json(response)
    } catch (error) {
        return res.status(500).json({ error: "backend error" })
    }
}

export const config = {
    api: {
        bodyParser: true,
    },
};