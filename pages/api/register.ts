import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const request = await fetch(`${process.env.SERVICE_URL}/login`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            telephone: req.body.telephone,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
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