import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookies = req.headers.cookie;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Referer": "https://api.thsolucoes.com",
        ...(cookies ? { "Cookie": cookies } : {})
    };

    const request = await fetch(`${process.env.SERVICE_URL}/contact`, {
        method: "POST",
        headers,
        redirect: "manual",
        body: JSON.stringify({
            email: req.body.email,
            name: req.body.name,
            body: req.body.body
        })
    });

    if (!request.ok) {
        return res.status(500).json({ error: "contact area error", status: request.status });
    }

    return res.status(request.status).json({ message: "ok" });
}
