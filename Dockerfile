FROM mhart/alpine-node:6.5.0

#PM2 will be used as PID 1 process
RUN npm install -g pm2@1.1.3

COPY frontend/package.json /var/www/app1/package.json
COPY crud-api/package.json /var/www/app2/package.json

WORKDIR /var/www

RUN npm config set loglevel warn \
    && npm config set only production \
    && npm config set progress false \
    && cd ./app1 \
    && npm i \
    && cd ../app2 \
    && npm i


# Copy source files
COPY . ./

# Expose ports
EXPOSE 8080
EXPOSE 3000

# Start PM2 as PID 1 process
ENTRYPOINT ["pm2", "--no-daemon", "start"]

# Actual script to start can be overridden from `docker run`
CMD ["process.json"]
