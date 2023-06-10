FROM node:18-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY . .
RUN npm i install 
EXPOSE 3001
CMD ["npm", "run", "start"]