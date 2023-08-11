import React from "react";


const Weather = ({weather}) =>{

    console.log(weather);
    
    function getHour(unixTimestamp) {
        var timestampInMillis = unixTimestamp * 1000;
        var date = new Date(timestampInMillis);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
      
        return hours + ":" + formattedMinutes;
      }

      var sunrise = weather ? getHour(weather.sys.sunrise) : null;
      var sunset = weather ? getHour(weather.sys.sunset) : null;

      console.log(sunrise);

    return(
        <>
        {weather ?
        <section className="border border-1 border-[#42C3EE] rounded-lg h-[231px] flex flex-col justify-between px-3 py-3">
        <div className="flex items-center">
            <div className="mr-4">
                <div className="flex items-center">
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    className="w-[38px] h-[38px] m-0 p-0" alt="Weather Icon"/>
                    <div className="flex-col">
                        <h4 className="font-inter font-normal text-[10.88px] leading-3 text-[#595977]">WEATHER</h4>
                        <p className="text-[17px] font-Inter font-normal text-[#14143F">{weather.weather[0].main.toLowerCase()}</p>
                    </div>
                </div>
            </div>
            <div className="flex-col">
                <h4 className="font-inter font-normal text-[10.88px] leading-3 text-[#595977]">DESCRIPTION</h4>
                <p className="text-[17px] font-Inter font-normal text-[#14143F">{weather.weather[0].description}: {weather.clouds.all}%</p>
            </div>
        </div>
        <div className="h-[1px] w-full bg-[#C4ECFA]"></div>
            <div className="flex items-center">
                <div className="mr-7">
                    <h4 className="font-inter font-normal text-[10.88px] leading-3 text-[#595977]">SUNSET</h4>
                    <p className="text-[17px] font-Inter font-normal text-[#14143F">{sunset}</p>
                </div>
                <div className="mr-7">
                    <h4 className="font-inter font-normal text-[10.88px] leading-3 text-[#595977]">SUNRISE</h4>
                    <p className="text-[17px] font-Inter font-normal text-[#14143F">{sunrise}</p>
                </div>
                <div>
                    <h4 className="font-inter font-normal text-[10.88px] leading-3 text-[#595977]">LOCATION</h4>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className="text-[17px] font-Inter font-normal text-[#14143F">{weather.name}</p>
                    </div>
                   
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-7">
                    <h4 className="font-inter font-normal text-[10.88px] leading-3 text-[#595977]">TEMPERATURE</h4>
                    <p className="text-[17px] font-Inter font-normal text-[#14143F">{weather.main.temp}</p>
                </div>
                <div>
                    <h4 className="font-inter font-normal text-[10.88px] leading-3 text-[#595977]">FEELS LIKE</h4>
                    <p className="text-[17px] font-Inter font-normal text-[#14143F]">{weather.main.feels_like}</p>
                </div>
            </div>
            <div>
                <h5 className="fon-inter text-[10.88px] font-normal text-[#595977] text-right">{weather.main.humidity}% humidity</h5>
                <input type="range" value={weather.main.humidity} disabled min="0" max="100" className="w-full bg-[#42C3EE] hide-knob"/>
            </div>
        
    </section>
        :
        null
        }
        </>
    )
};

export default Weather;