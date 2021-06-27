FROM mhart/alpine-node:6.5.0

RUN npm install -g pm2@1.1.3

COPY frontend/package.json /var/www/app1/package.json
COPY backend/package.json /var/www/app2/package.json

WORKDIR /var/www

COPY . ./

EXPOSE 8080
EXPOSE 3000

ENTRYPOINT ["pm2", "--no-daemon", "start"]

CMD ["process.json"]
