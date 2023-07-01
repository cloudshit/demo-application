FROM node:lts-alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm i

COPY * /app

HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://localhost:8080/health || exit 1

CMD ["node", "index.mjs"]
