FROM node:16-buster-slim

ENV APP_ROOT /var/www
WORKDIR ${APP_ROOT}
ENV NODE_ENV production

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm run build

CMD ["npm", "run", "start"]


