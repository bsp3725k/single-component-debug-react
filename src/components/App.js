import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import '../styles/App.css';

const App = () => {
  const [weatherDetails, setWeatherDetails] = useState(null);

  console.log(weatherDetails);

  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Search setWeatherDetails={setWeatherDetails} />
        {weatherDetails && <WeatherCard weatherDetails={weatherDetails} />}
        <Footer />
      </div>
    </div>
  );
};

export default App;
