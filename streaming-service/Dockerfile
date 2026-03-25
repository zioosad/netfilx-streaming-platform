FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY src/ .
EXPOSE 3003
CMD ["node", "index.js"]

