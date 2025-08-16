# 🚀 HTTPS Server Demo(TypeScript + Express + mkcert)

A simple ** HTTPS server ** built with ** Express ** and ** TypeScript **, using[mkcert]to generate trusted SSL certificates for local development. This avoids browser warnings (*Not Secure*) when testing APIs or OAuth callbacks locally.  

    ---

## ⚡ Quick Start

    ```bash
# 1. Create project
mkdir https-server-demo && cd https-server-demo
npm init -y

# 2. Install dependencies
npm install express @types/express
npm install -D typescript ts-node @types/node

# 3. Install mkcert (macOS example)
brew install mkcert nss
mkcert -install

# 4. Generate certs
mkcert localhost   # creates localhost.pem & localhost-key.pem

# 5. Create tsconfig.json
cat > tsconfig.json <<EOL
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
EOL

# 6. Create source file
mkdir src
cat > src/server.ts <<EOL
import express, { Request, Response } from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from HTTPS 🚀 (TypeScript + Express)');
});

const httpsOptions = {
  key: fs.readFileSync(path.join(process.cwd(), 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(process.cwd(), 'localhost.pem')),
};

https.createServer(httpsOptions, app).listen(3000, () => {
  console.log('✅ HTTPS server running at https://localhost:3000');
});
EOL

# 7. Add npm scripts
npx json -I -f package.json -e 'this.scripts={dev:"ts-node src/server.ts",build:"tsc",start:"node dist/server.js"}'

# 8. Run dev server
npm run dev
