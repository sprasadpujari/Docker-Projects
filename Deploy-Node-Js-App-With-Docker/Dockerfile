# Use an official Node.js runtime as the base image
FROM node:18
# Set the working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the container
COPY package*.json /usr/src/app/
# Install application dependencies
RUN npm install
# Copy the rest of the application code
COPY . /usr/src/app
# Specify the command to run your application
EXPOSE 8080
CMD ["node", "app.js"]
