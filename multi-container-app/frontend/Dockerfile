# It uses node:18-alpine as the base image for the frontend React.js application
FROM node:18-alpine

# Creating the working directory named `app`
WORKDIR /app

# Copying the package.json file to the working directory `app`
COPY package.json .

# Installing all the tools and dependencies in the container
RUN npm install

# Exposing the container to run on this port 3000
EXPOSE 3000

# Command to start the Docker container for the frontend React.js application
CMD ["npm", "start"]