import { createContext, useState } from "react";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [info, setInfo] = useState([]);
  const values = { city, setCity, info, setInfo, cityName, setCityName };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export default WeatherContext;
