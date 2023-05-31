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

#IMAGEN DE DOCKER RECOMENDADA POR EQUIPO DE NEXT
