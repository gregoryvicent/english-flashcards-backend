FROM node:latest

COPY ["package.json", "package-lock.json", "/usr/app/"]

WORKDIR /usr/app/

RUN npm install

COPY [".", "/usr/app/"]

<<<<<<< HEAD
EXPOSE 3001
=======
EXPOSE 3000
>>>>>>> 9141f1d0cafbde374ef9ac7c3a073bbad77e86da

CMD ["npx", "nodemon", "dist/index.js"]
