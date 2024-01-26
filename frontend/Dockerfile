FROM node:20-alpine3.18
RUN apk add g++ make python3
WORKDIR /app
RUN yarn install
CMD ["yarn", "develop"]