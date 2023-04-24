import { useQuery } from "react-query";
import { getWeather } from "../api/weather/getWeather";
import { Gauge } from "../components/gauge/gauge";
import { useState } from "react";

import styles from "./gaugeContainer.module.css";
import { Button } from "../components/button/button";

export const GaugeContainer = (): JSX.Element => {
  const [showVilnius, setShowVilnius] = useState(false);
  const [showNida, setShowNida] = useState(false);

  const { data: nida, refetch: refetchNida } = useQuery("pressureNida", () => getWeather("nidos"), {
    enabled: false
  });
  const { data: vilnius, refetch: refetchVilnius } = useQuery("pressureVilnius", () =>
    getWeather("vilniaus"), {
      enabled: false
    }
  );

  const pressureNida = nida?.observations.slice(-1)[0].seaLevelPressure;
  const pressureVilnius = vilnius?.observations.slice(-1)[0].seaLevelPressure;

  const handleShowNida = async () => {
    setShowNida((prev) => !prev);
    await refetchNida();
  };

  const handleShowVilnius = async () => {
    setShowVilnius((prev) => !prev);
    await refetchVilnius();
  };

  const pressureChangingStatus = (city: any) => {
    const status =
      city?.observations.slice(-2)[0].seaLevelPressure >
      city?.observations.slice(-2)[1].seaLevelPressure
        ? "increasing"
        : "decreasing ";
    return status;
  };

  const nidaStatus = pressureChangingStatus(nida);
  const vilniusStatus = pressureChangingStatus(vilnius);

  return (
    <div className={styles.container}>
      <div>
        <Button onClick={handleShowVilnius}>Vilnius</Button>
        <Button onClick={handleShowNida}>Nida</Button>
      </div>
      <div>
        {showVilnius && (
          <Gauge
            pressure={pressureVilnius}
            status={vilniusStatus}
            city="Vilnius"
          />
        )}
        {showNida && (
          <Gauge pressure={pressureNida} status={nidaStatus} city="Nida" />
        )}
      </div>
    </div>
  );
};
