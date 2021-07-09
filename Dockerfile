FROM node:16-alpine AS base

WORKDIR /base

COPY package*.json ./
COPY yarn.lock ./

ARG SPORTAJGA_PACKAGES
COPY .npmrc ./.npmrc
RUN echo "//npm.pkg.github.com/:_authToken=$SPORTAJGA_PACKAGES" >> .npmrc

RUN yarn

RUN rm ./.npmrc

COPY . .

FROM base AS build

WORKDIR /build
COPY --from=base /base ./

RUN yarn run build

FROM node:16-alpine AS production

RUN apk add --no-cache dumb-init

WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/yarn.lock ./
COPY --from=build /build/locales ./
COPY --from=build /build/i18n.json ./
COPY --from=build /build/src/.next ./.next
COPY --from=build /build/src/public ./public

ARG SPORTAJGA_PACKAGES
COPY .npmrc ./.npmrc
RUN echo "//npm.pkg.github.com/:_authToken=$SPORTAJGA_PACKAGES" >> .npmrc

RUN yarn add next

RUN rm ./.npmrc

EXPOSE 3000

CMD ["dumb-init", "yarn", "run", "start"]
