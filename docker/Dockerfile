FROM node:20.14.0-alpine3.20

RUN apk add --no-cache git

WORKDIR /app

RUN git clone https://github.com/NathanMunsch/portfolio.git /app

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
