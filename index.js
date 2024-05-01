import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import characters from './data/characters.json' with { type: 'json'};

const app = express();
const PORT = process.env.PORT ?? 1234;

app.use(express.json());

app.use('/', express.static('dist/client/'));
app.get('./data/characters.json', (req, res) => {
    res.json(characters)
});

app.use(ssrHandler);

app.listen(PORT);
