import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();

const PORT = process.env.PORT ?? 1234;

app.use('/', express.static('dist/client/'));

app.use(ssrHandler);

app.listen(PORT);
