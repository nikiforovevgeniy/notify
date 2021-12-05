FROM node

EXPOSE $PORT

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

CMD ["node", "./src/main.js"]
