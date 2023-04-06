import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Info from "./components/Info/Info";
function App() {
  const [info, setInfo] = useState([]);
  //girilen şehrin ismini infoya taşımamız için oluşturulan state
  const [cityName, setCityName] = useState("");
  return (
    <div className="App">
      <h1>weather App</h1>
      {/* Formdan verilerin alınması için geçilen setInfo propu */}
      <Form setInfo={setInfo} setCityName={setCityName} />
      {/* Info sayfasına hava durumu verilerinin aktarılması */}
      <Info info={info} cityName={cityName} />
    </div>
  );
}

export default App;
