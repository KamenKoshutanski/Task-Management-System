# Use Node.js 19.9.0 as the base image
FROM node:19.9.0

# Set the working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend source code
COPY . .

# Expose the backend port (if required)
EXPOSE 3031

# Define a healthcheck that pings the app's endpoint to check if it's running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
    CMD curl -f http://localhost:3031/ || exit 1

# Start the backend application
CMD ["npm", "start"]