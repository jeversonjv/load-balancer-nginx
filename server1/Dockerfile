FROM node:16-alpine

WORKDIR /app

COPY express.js .
COPY package.json .

RUN npm install

CMD ["node", "express.js"]