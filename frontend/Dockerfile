FROM node:18-alpine
RUN apk add g++ make python3
WORKDIR /app
RUN yarn install
CMD ["yarn", "develop"]