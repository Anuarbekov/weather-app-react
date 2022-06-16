import "./App.css";
import { useState } from "react";
function App() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState("End");

  const APIKEY = "361ebb12802e23acedfab01998e0a8d0";
  const city = "Almaty";

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  };
  return (
    <div>
      <button onClick={getWeather()}>Know the weather</button>
      <h3>5</h3>
    </div>
  );
}
export default App;
