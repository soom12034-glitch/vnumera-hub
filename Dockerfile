# Build stage - Force rebuild: v4
FROM node:20.12-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache python3 make g++ && npm install
COPY . .
RUN npm run build

# Production stage
FROM node:20.12-alpine
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache python3 make g++ && npm install --omit=dev
COPY --from=builder /app/dist ./dist
COPY backend/server ./server
RUN mkdir -p uploads data
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3001/api/config || exit 1
CMD ["node", "server/index.js"]
