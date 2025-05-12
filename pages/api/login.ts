import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookies = req.headers.cookie;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(cookies ? { "Cookie": cookies } : {})
    };

    const request = await fetch(`${process.env.SERVICE_URL}/login`, {
        headers: headers,
        method: "POST",
        body: JSON.stringify({
            email: req.body.email,
            password: req.body.password
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
        bodyParser: true,
    },
};