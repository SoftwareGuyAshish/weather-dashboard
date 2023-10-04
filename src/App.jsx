import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import UnitConversion from "./components/UnitConversion";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [showLoader, setShowLoader] = useState(false);

  const apiKey = "a8e71c9932b20c4ceb0aed183e6a83bb";

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [unit]);

  const fetchWeatherData = async () => {
    setError();
    setShowLoader(true);
    setWeatherData(null);

    try {
      await fetch(
        `${"https://api.openweathermap.org/data/2.5/weather"}?q=${city}&appid=${apiKey}&units=${unit}`
      )
        .then((response) => {
          if (!response.ok) {
            console.log(response);
            throw new Error("City not found");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setWeatherData(data);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
          setWeatherData(null);
        });
    } catch (err) {
      console.log(err);
    }
    setShowLoader(false);
  };

  const handleUnitChange = async (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-red-600 text-white flex flex-col justify-center items-center">
      <div className="container px-4 w-full md:w-1/2 md:mx-auto text-center">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Weather Dashboard
          </h1>
        </div>
        <SearchInput
          city={city}
          setCity={setCity}
          onSearch={() => fetchWeatherData()}
        />

        {weatherData ? (
          <div className="mt-8">
            <WeatherCard weatherData={weatherData} unit={unit} />
          </div>
        ) : (
          <div className="mt-8">
            <Loader showLoader={showLoader} error={error} unit={unit} />
          </div>
        )}
        <UnitConversion
          unit={unit}
          setUnit={setUnit}
          onUnitChange={handleUnitChange}
        />
      </div>
    </div>
  );
}

export default App;
