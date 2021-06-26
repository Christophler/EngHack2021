import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import https from 'https';

const app = express();

let lat = '33.44';
let lon = '94.04';

https.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,daily&appid=128eacb0a4bcd1d2a7e3ba93dcbf716f', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        //console.log(data);
    });

    app.get('/', (req, res) => {
        res.send(data);
    });
})

app.use(cors());

app.listen(3000, () =>
    console.log('Listening on port 3000'),
);