FROM node:22-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including devDependencies for express)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose port for cloudflared
EXPOSE 6129

# Set default port
ENV PORT=6129

# Start the server
CMD ["node", "express.js"]
