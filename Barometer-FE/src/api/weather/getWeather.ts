import axios from "axios";
import { meteoObservations } from "./types";

export const getWeather = async (place: string): Promise<meteoObservations> => {

    const { data } = await axios.get(`http://localhost:3001/weather?place=${place}`);
    
    return data;
};

