FROM node:alpine

LABEL maintainer="Lantz Shaw"
LABEL email="lantzshaw@163.com"

RUN npm i pnpm -g
RUN pnpm install

WORKDIR /app

COPY . .

CMD ["pnpm", "run", "dev"]
