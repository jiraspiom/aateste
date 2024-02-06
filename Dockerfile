# Use a Node.js base image
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN mkdir "/.npm"

# RUN chown -R 1000670000:0 "/.npm"
RUN chown -R 1000670000:0 "/.npm"

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
