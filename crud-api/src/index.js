import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import https from 'https';

const app = express();

const options = {
    hostname: 'https://api.openweathermap.org',
    path: '/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}',
    method: 'GET'
}

https.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=128eacb0a4bcd1d2a7e3ba93dcbf716f', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    //res.on('end', () => {
    //    console.log(data);
    //});
})

console.log(data);

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () =>
    console.log('Listening on port 3000'),
);