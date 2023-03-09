FROM node:18-alpine
RUN apk add --no-cache tzdata
ENV TZ Europe/Moscow
ENV NODE_PATH /app/node_modules

WORKDIR /app

RUN npm install -g npm@9.5.0
CMD npm i && node start.js