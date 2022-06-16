import "./App.css";
import { useState } from "react";
function App() {
  const [error, setError] = useState(false);
  const [items, setItems] = useState("");
  const APIKEY = "361ebb12802e23acedfab01998e0a8d0";
  const city = "Almaty";
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      );
  };
  return (
    <div className="main">
      <button onClick={getWeather} className="btn btn-success">
        Weather in Almaty
      </button>
      <h3>{items === "" ? items : `Current temperature:  ${items.main.temp} ℃`}</h3>
      <h3>{error === false ? "" : error}</h3>
    </div>
  );
}
export default App;
