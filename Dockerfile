# Use Node.js as the base image
FROM oven/bun:latest
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Generate Database
# RUN bun prisma migrate dev --name init

# Build the Next.js application
RUN bun run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["bun", "start"]
