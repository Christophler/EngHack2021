import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () =>
    console.log('Listening on port 3000'),
);