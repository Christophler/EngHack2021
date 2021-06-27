import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/coordinates', (req, res) => {
    let lat = req.body.lat;
    let lng = req.body.lng;
    
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lng + '&exclude=hourly,daily&appid=128eacb0a4bcd1d2a7e3ba93dcbf716f')
        .then(res => res.json())
        .then(data => res.send(data));
});

app.listen(3000, () =>
    console.log('Listening on port 3000'),
);
