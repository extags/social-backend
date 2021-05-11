FROM node:15-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh

WORKDIR /app

COPY package.json .
# COPY .npmrc .

RUN npm install --only=production

# RUN rm .npmrc

COPY . .

EXPOSE 3000
CMD ["npm", "start"]