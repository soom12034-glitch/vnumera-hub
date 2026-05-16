# Build stage - Force rebuild: v3
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev && npm rebuild better-sqlite3
COPY --from=builder /app/dist ./dist
COPY server ./server
RUN mkdir -p uploads data
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3001/api/config || exit 1
CMD ["node", "server/index.js"]
