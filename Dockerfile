# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Installs all dependencies, including devDependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose port (match what your Express app uses, typically 5000)
EXPOSE 5000

# Start server in development mode
CMD ["npm", "run", "dev"]
