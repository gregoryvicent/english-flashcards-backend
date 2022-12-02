// The App Core, here born the app and all the functionalities are connected
import express from 'express';
import morgan from 'morgan';

import { routerRoot } from '../routes/home.router';
import { routerV1 } from '../routes/v1/v1.router';

const app = express();
// Port to listen
app.set('port', process.env.PORT || 3001);
// Middlewires
app.use(morgan('dev'));
app.use('/', routerRoot); // Route to Home
app.use('/api/v1', routerV1); // Route to API version 1.0.0

export { app };
