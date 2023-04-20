import axios from "axios";
import { meteoObservations } from "../types/types";

const getWeatherinfo = async (place: string): Promise<meteoObservations> => {
  const { data } = await axios.get(
    `https://api.meteo.lt/v1/stations/${place}-ams/observations/latest`
  );

  return data;
};

export { getWeatherinfo };
