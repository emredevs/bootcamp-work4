import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
export default function Form({ setInfo, setCityName }) {
  const [city, setCity] = useState("");
  //form submit olduğunda API dan verileri çektiğim yer
  const formSubmit = async (e) => {
    e.preventDefault();
    if (!city) {
      return;
    }
    //API key
    const API = "3729da786f314a9eac3103025230604";
    //API dan girilen şehirin 7 günlük hava durumunu almak için istek atılması
    const baseURL = `http://api.weatherapi.com/v1/forecast.json?key=${API}&q=${city}&days=7&aqi=no&alerts=no&units=metric&lang=tr`;
    await axios
      .get(baseURL)
      .then((res) => setInfo(res.data.forecast.forecastday)); //gelen verilerden sadece istediğimiz verilerin filtrelenmesi
    setCityName(city); //Info'da şehrin ismini aldığımız yer
    setCity("");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          {/* <div className={styles.btnCty}>
            <button onClick={() => setCity("Ankara")}>Ankara</button>
            <button onClick={() => setCity("İstanbul")}>İstanbul</button>
            <button onClick={() => setCity("İzmir")}>İzmir</button>
            <button onClick={() => setCity("Antalya")}>Antalya</button>
          </div> */}
          {/* klavyeden girilen şehrin verilerinin alınması */}
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
