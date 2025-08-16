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

# 6. Create source file

# 7. Add npm scripts

# 8. Run dev server
npm run dev
