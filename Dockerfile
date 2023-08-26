FROM node:20-alpine3.17
RUN apk add --no-cache tzdata
ENV TZ Asia/Yekaterinburg
ENV NODE_PATH /app/node_modules

WORKDIR /app

RUN npm install -g npm && yarn install
CMD npm i && node start.js