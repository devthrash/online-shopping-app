FROM node:18.12.1

WORKDIR /service

COPY package*.json .
RUN npm ci && npm uninstall npm

COPY . .

ENV NODE_ENV production

CMD ["node", "index.js"]
