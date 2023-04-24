import express from 'express';

import { getWeatherinfo } from '../services/weather.service';
import validate from '../validators/place.validator';

const getWeather = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {

    try {

        const place: string = req.query.place as string;

        if (place && validate(place)) {
            res.json(await getWeatherinfo(place))
        }
        
    } catch (err) {
        next(err);
    }
};

export { getWeather };
