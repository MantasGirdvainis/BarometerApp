import express from 'express';

import { getWeatherinfo } from '../services/weather.service';

const getWeather = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

    const place: string = req.query.place as string;

    try {
        res.json(await getWeatherinfo(place));
    } catch (err) {
        next(err);
    }
};

export { getWeather };
