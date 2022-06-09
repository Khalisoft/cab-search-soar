FROM node:latest
WORKDIR /src
# COPY package*.json ./
COPY . .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["node", "dist/index.js"]