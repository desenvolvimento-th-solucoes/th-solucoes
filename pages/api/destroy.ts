import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookies = req.headers.cookie;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        ...(cookies ? { "Cookie": cookies } : {})
    };

    const request = await fetch(`${process.env.SERVICE_URL}/destroy`, {
        credentials: "include",
        method: "GET",
    })
    if (!request.ok) {
        return res.status(500).json({ error: "destroy session error" })
    }
    res.setHeader('Set-Cookie', [
        `session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`,
    ]);
    const response = await request.json()
    return res.status(request.status).json(response)
}

export const config = {
    api: {
        bodyParser: true,
    },
};