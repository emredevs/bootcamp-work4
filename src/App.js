import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Info from "./components/Info/Info";
function App() {
  const [info, setInfo] = useState([]);
  const [cityName, setCityName] = useState("");
  return (
    <div className="App">
      <h1>weather App</h1>
      <Form setInfo={setInfo} setCityName={setCityName} />
      <Info info={info} cityName={cityName} />
    </div>
  );
}

export default App;
