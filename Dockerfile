#IMAGEN DOCKER NEXT
# Imagen de docker
# FROM node:16-alpine
# #Se genera el directorio en donde se trebajara
# RUN mkdir -p /app
# #Se indica la carpeta sobre la que se va a trabajar
# WORKDIR /app
# #Se copia del proyecto y se pega en la carpeta /app
# COPY package.json /app
# #Se realiza la instalación de los modulos del proyecto
# RUN yarn install
# #Se copia todo y se pega en /app
# COPY . /app
# #No se tiene la caprtea .next por lo que se genera 
# RUN npm run build
# #Se espone el puerto
# EXPOSE 3000
# #Ejcutar la aplicación 
# CMD ["yarn","start"]
# ##Se construye la imagen de la app 
# #docker build -t nextjs-initial .
# #Se puede ver la imagen
# #docker images
#levantar la imagen 
#docker run --name=next-app -p 3000:3000 nextjs-initial

#IMAGEN DE DOCKER RECOMENDADA POR EQUIPO DE NEXT
# Fuente: https://github.com/vercel/next.js/blob/canary/examples/with-docker/README.md

# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]

# entre 50 a 150 MB

#generar la imagen 
#docker build -t nextjs-initial2
#Para reducir el peso de la imagen se tiene que realizar una configuración en 
#Si da este error se tiene que configurar el standAlone en next.config.js
#experimental: {
#    outputStandalone: true
#  }
#=> ERROR [runner 7/8] COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./ 
#Así como especificar el puerto en el package.json
#"start": "next start -p ${PORT:3000}",
#Una vez contruida la imagen generar el container y ejecutar 
#docker run --name=next-app -p 3000:3000 nextjs-initial
