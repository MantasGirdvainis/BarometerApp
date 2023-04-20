import express, { Application } from 'express';

import weatherRoutes from './routes/weather.routes';

const app: Application = express();

const port: number = 3001;

app.use('/weather', weatherRoutes);

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
});