FROM node:16-alpine

WORKDIR /app

COPY express.js .
COPY package.json .

RUN npm install

EXPOSE 3002

CMD ["node", "express.js"]