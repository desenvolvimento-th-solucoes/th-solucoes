import { NextApiRequest, NextApiResponse } from "next";
import { instance } from "./check";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const request = await instance.post(`/login`, {
            body: {
                email: req.body.email,
                password: req.body.password
            }
        })
        const response = await request.data;
        return res.status(request.status).json(response);
    } catch (error) {
        return res.status(502).json(error)
    }
}