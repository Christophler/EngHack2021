import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let lat = '';
let lng = '';

app.post('/coordinates', (req, res) => {
    lat = req.body.lat;
    lng = req.body.lng;

    https.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lng + '&exclude=hourly,daily&appid=128eacb0a4bcd1d2a7e3ba93dcbf716f', (res) => {
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
})


app.listen(3000, () =>
    console.log('Listening on port 3000'),
);
