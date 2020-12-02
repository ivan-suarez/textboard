FROM node:12
#Create app directory
WORKDIR /home
#Install app dependencies

COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .
RUN ls

EXPOSE 3000 
CMD ["npm", "run", "dev"]
