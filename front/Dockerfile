# Use uma imagem base do Node.js (ajuste a versão conforme necessário)
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compile o front-end, se necessário
# (Descomente se você tiver um script de build, como em frameworks frontend como React ou Vue)
RUN npm run build

# Exponha a porta em que a aplicação está rodando (ajuste conforme necessário)
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "start"]