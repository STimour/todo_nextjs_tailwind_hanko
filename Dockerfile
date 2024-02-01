FROM node:latest

# Installation de npm
RUN apt-get update && \
    apt-get install -y npm && \
    npm install -g npm@latest

WORKDIR ./

COPY package*.json ./
RUN npm install
RUN npx prisma generate 
RUN npm run postinstall

COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
