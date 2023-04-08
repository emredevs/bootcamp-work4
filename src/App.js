import "./App.css";
import Form from "./components/Form/Form";
import Info from "./components/Info/Info";
import { WeatherProvider } from "./Context/Weather";
function App() {
  return (
    <div className="App">
      <h1>weather App</h1>
      {/* Form ve Infoya prop geçmeden Weather context ten veri geçme */}
      <WeatherProvider>
        <Form />
        <Info />
      </WeatherProvider>
    </div>
  );
}

export default App;
