import express, { Request, Response } from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';

const app = express();

app.get('/', (req: Request, res: Response)=>{
    res.send("Hello from https - typescript :)");
});

const certPath = process.cwd();

const httpsOptions = {
    key: fs.readFileSync(path.join(certPath, 'certs/localhost-key.pem')),
    cert: fs.readFileSync(path.join(certPath, 'certs/localhost.pem')),
};

https.createServer(httpsOptions, app).listen(3000, () => {
    console.log('HTTPS server running at https://localhost:3000');
});
