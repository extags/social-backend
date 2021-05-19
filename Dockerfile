FROM node:10.9.0-alpine
WORKDIR /app
ADD . /app
RUN npm install
RUN npm install -g nodemon
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]
EXPOSE 3000