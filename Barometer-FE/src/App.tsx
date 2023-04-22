import { useQuery } from "react-query";
import { getWeather } from "./api/weather/getWeather";
import { WeatherCard } from "./components/weatherCard/weatherCard";

function App() {

  const { data } = useQuery('observations', () => getWeather('nidos'));
  
  console.log(data?.observations.slice(-1))
  
  return (
      <WeatherCard />
  )
}

export default App;
