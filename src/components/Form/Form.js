import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
export default function Form({ setInfo }) {
  const [city, setCity] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!city) {
      return;
    }
    const API = "3729da786f314a9eac3103025230604";
    const baseURL = `http://api.weatherapi.com/v1/forecast.json?key=${API}&q=${city}&days=7&aqi=no&alerts=no&units=metric&lang=tr`;
    await axios
      .get(baseURL)
      .then((res) => setInfo(res.data.forecast.forecastday));
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <div className={styles.btnCty}>
            <button onClick={() => setCity("Ankara")}>Ankara</button>
            <button onClick={() => setCity("İstanbul")}>İstanbul</button>
            <button onClick={() => setCity("İzmir")}>İzmir</button>
            <button onClick={() => setCity("Antalya")}>Antalya</button>
          </div>

          <input
            className={styles.ctyInput}
            value={city}
            placeholder="Bir Şehir Giriniz"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className={styles.btn} type="submit">
            Bilgileri Getir
          </button>
        </div>
      </form>
    </div>
  );
}
