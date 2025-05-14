# Use the official Node.js image as the base image
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY .env .
COPY ./dist .

# Expose the port the app runs on
EXPOSE ${SERVER_PORT}

# Command to run the application
CMD ["yarn", "start"]