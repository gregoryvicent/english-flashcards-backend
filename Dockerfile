FROM node:latest

COPY ["package.json", "package-lock.json", "/usr/app/"]

WORKDIR /usr/app/

RUN npm install

COPY [".", "/usr/app/"]

EXPOSE 3000

CMD ["npx", "nodemon", "dist/index.js"]
