# Production stage - use pre-built dist from git
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy pre-built dist folder (built locally and pushed to git)
COPY dist/ ./dist/

# Copy server files
COPY server/ ./server/
COPY public/ ./public/

# Create data directory for SQLite
RUN mkdir -p /app/data

# Environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Run the server
CMD ["node", "server/index.js"]
