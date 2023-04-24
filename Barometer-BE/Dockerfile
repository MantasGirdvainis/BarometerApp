FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD [ "node", "dist/app.js" ]

EXPOSE 3001