import React, { useContext } from "react";
import styles from "./Info.module.css";
import WeatherContext from "../../Context/Weather";
export default function Info() {
  const { info, cityName } = useContext(WeatherContext);
  console.log(info);
  return (
    <div className={styles.container}>
      <h1 className={styles.cityName}>{cityName.toUpperCase()}</h1>
      <ul className={styles.list}>
        {info.map((item, index) => (
          <li key={index}>
            <h4>{item.date}</h4>
            <img src={item.day.condition.icon} alt="" />
            <h3>
              {Math.floor(item.day.maxtemp_c)} <sup>o</sup>C
            </h3>
            <p>{item.day.condition.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
