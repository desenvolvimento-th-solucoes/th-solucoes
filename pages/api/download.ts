import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { filepath } = req.query;

    if (typeof filepath !== 'string') {
        return res.status(400).json({ message: 'Invalid file path' });
    }

    const decodedFilePath = decodeURIComponent(filepath);

    const filePath = path.join(process.cwd(), decodedFilePath);

    if (fs.existsSync(filePath)) {
        const filename = path.basename(filePath);
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.setHeader('Content-Type', 'application/octet-stream');

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } else {
        res.status(404).json({ message: 'File not found' });
    }
}
