import React from "react";
import styles from "./Info.module.css";
export default function Info({ info, cityName }) {
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
              {item.day.maxtemp_c} <sup>o</sup>C
            </h3>
            <p>{item.day.condition.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
