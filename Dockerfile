FROM node:latest

# Installation de npm
RUN apt-get update && \
    apt-get install -y npm && \
    npm install -g npm@latest

WORKDIR /

# Copie du fichier package.json pour installer les dépendances
COPY package*.json ./
RUN npm install
RUN npm run postinstall

# Copie du reste des fichiers
COPY . .


# Construction de l'application
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# Utiliser un utilisateur non-root
USER node

# Commande par défaut pour démarrer l'application
CMD ["npm", "run", "start"]
