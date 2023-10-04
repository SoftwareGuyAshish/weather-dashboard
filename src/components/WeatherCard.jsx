import React from "react";
import {
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiDaySunny,
} from "react-icons/wi";
import { FaLocationArrow } from "react-icons/fa";
function WeatherCard({ weatherData, unit }) {
  const { main, weather, name, sys, wind } = weatherData;

  return (
    <div className="max-w-screen-sm min-w-full mx-auto p-4 py-10 text-white bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg overflow-hidden shadow-xl">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-white mb-1">
          <FaLocationArrow
            className="inline-block text-xl mr-2"
            color="white"
          />
          {name}, {sys?.country}
        </h2>
        <p className="text-lg capitalize">{weather[0]?.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-8">
        <div className="flex items-center justify-center flex-col text-center">
          <WiThermometer className="text-4xl mb-1" />
          <div className="text-lg font-bold mb-1">Temperature</div>
          <div className="text-xl">
            {main?.temp}&deg;{unit === "metric" ? "C" : "F"}
          </div>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <WiHumidity className="text-4xl mb-1" />
          <div className="text-lg font-bold mb-1">Humidity</div>
          <div className="text-xl">{main?.humidity}%</div>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <WiStrongWind className="text-4xl mb-1 transform rotate-90" />
          <div className="text-lg font-bold mb-1">Wind Speed</div>
          <div className="text-xl">
            {wind?.speed} {unit === "metric" ? "m/s" : "mph"}
          </div>
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          <WiDaySunny className="text-4xl mb-1" />
          <div className="text-lg font-bold mb-1">Sunrise/Sunset</div>
          <div className="text-xl">
            {new Date(sys?.sunrise * 1000).toLocaleTimeString()} /{" "}
            {new Date(sys?.sunset * 1000).toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
