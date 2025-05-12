import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const request = await fetch(`${process.env.SERVICE_URL}/redefine`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
            id: req.body.id,
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