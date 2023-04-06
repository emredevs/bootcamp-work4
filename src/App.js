import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Info from "./components/Info/Info";
function App() {
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <h1>weather App</h1>
      <Form setInfo={setInfo} />
      <Info info={info} />
    </div>
  );
}

export default App;
