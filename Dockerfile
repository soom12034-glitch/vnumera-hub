# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm rebuild better-sqlite3
COPY --from=builder /app/dist ./dist
COPY server ./server
RUN mkdir -p uploads data
EXPOSE 3001
CMD ["node", "server/index.js"]
