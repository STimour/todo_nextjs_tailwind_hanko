FROM node:latest
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN next build
EXPOSE 3000
CMD ["next", "start"]