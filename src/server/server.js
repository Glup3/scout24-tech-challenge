import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import analytics from './routes/analytics';

const server = express();

server.use(cors());
server.use(bodyParser.json());

const routePrefix = '/api/v1';

server.use(`${routePrefix}/analytics`, analytics);

export default server;
