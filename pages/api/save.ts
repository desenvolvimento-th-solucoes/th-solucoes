"use server"

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const request = await fetch(`${process.env.SERVICE_URL}/save`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
            id: req.body.id,
            data: req.body.informations
        })
    })
    if (!request.ok) {
        return res.status(500).json({ error: "backend error" })
    }
    const response = await request.json()
    return res.status(request.status).json(response)
}

export const config = {
    api: {
        bodyParser: true
    }
};