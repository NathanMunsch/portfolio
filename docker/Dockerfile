FROM node:20.14.0-alpine3.20

WORKDIR /app

ADD https://github.com/NathanMunsch/portfolio.git /app

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]