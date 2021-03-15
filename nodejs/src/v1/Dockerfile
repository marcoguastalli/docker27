FROM node:current-buster

COPY nodejs/. /var/nodejs

WORKDIR /var/nodejs

EXPOSE 9000

RUN npm install

CMD [ "node", "express.js" ]