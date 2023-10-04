import React from "react";

function UnitConversion({ unit, onUnitChange, setUnit }) {
  return (
    <div className="mt-6">
      <button
        className={`bg-gradient-to-r mx-4 hover:from-gray-500 hover:to-gray-600 text-white py-2 px-4 rounded shadow-lg ${
          unit === "metric"
            ? "from-gray-400 to-gray-500"
            : "from-orange-400 to-orange-500"
        }`}
        onClick={() => {
          setUnit("metric");
          onUnitChange("metric");
        }}
      >
        Celsius
      </button>
      <button
        className={`bg-gradient-to-r mx-4 hover:from-gray-500 hover:to-gray-600 text-white py-2 px-4 rounded shadow-lg ${
          unit === "imperial"
            ? "from-gray-400 to-gray-500"
            : "from-orange-400 to-orange-500"
        }`}
        onClick={() => {
          setUnit("imperial");
          onUnitChange("imperial");
        }}
      >
        Fahrenheit
      </button>
    </div>
  );
}

export default UnitConversion;
