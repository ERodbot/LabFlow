# Use the official Node.js image as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Vite uses port 3000 by default for development
EXPOSE 5173

# Run Vite in development mode
CMD ["npm", "run", "dev"]
