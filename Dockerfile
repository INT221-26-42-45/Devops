
FROM node:8.9.1-alpine as step01
WORKDIR /front-end/src/
COPY ./package.json /front-end/src/package.json
RUN npm install
COPY . /front-end/src
RUN npm run build








