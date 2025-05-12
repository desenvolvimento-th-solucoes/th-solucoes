import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const instance = axios.create({
    baseURL: process.env.SERVICE_URL,
    withCredentials: true
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const request = await instance.get(`${process.env.SERVICE_URL}/check`)
    if (request.status !== 200) {
        console.log(request);
        return res.status(500).json({ error: "backend error" })
    }
    const response = await request.data;
    return res.status(request.status).json(response)
}

export const config = {
    api: {
        bodyParser: true,
    },
};