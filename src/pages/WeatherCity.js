import React, {useState, useEffect} from "react";
import City from "../Components/WeatherCity/City";
import Weather from "../Components/WeatherCity/Weather";
import Nav from "../Components/Nav";


const WeatherCity = () =>{
    const [selectedCity, setSelectedCity] = useState({});
    const [weather, setWeather] = useState(null);

    const fetchWeather = () => {
        if (selectedCity.location && selectedCity.location.coordinates) {
            const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.location.coordinates[1]}&lon=${selectedCity.location.coordinates[0]}&units=metric&appid=${apiKey}`;
    
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setWeather(data);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        }
    };

    useEffect(() => {
       fetchWeather()
      }, [selectedCity]);


    return(
        <section className="flex justify-center bg-gray-400 min-h-screen mt-0">
          <div className='absolute z-10'>
            <img src='./Status Bar - iPhone.png'></img>
          </div>
          <div className="w-[375px] bg-white relative flex flex-col items-center">
              <h1 className="text-center font-semibold font-Inter text-[21.25px] leading-6 mt-[72px]">Weather City</h1>
              <div className="flex flex-col h-[368px] w-[343px] mt-[44px]">
                <City setSelectedCity={setSelectedCity}/>
                <Weather weather={weather}/>
              </div>
              <div className="absolute bottom-0 w-full">
                <Nav />
              </div>
            </div>
        </section>
    )
};

export default WeatherCity;