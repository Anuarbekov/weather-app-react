import './App.css';
import $ from 'jquery';
const APIKEY = "361ebb12802e23acedfab01998e0a8d0";
const city = "New York";
function App() {
  $(document).ready(
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=361ebb12802e23acedfab01998e0a8d0",
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
          console.log(result);
      },
      error: function(error){
        console.log(error);
      }
  })
  );
  return (
    <div className="App">
      <h1>Text</h1>
    </div>
  );
}

export default App;
