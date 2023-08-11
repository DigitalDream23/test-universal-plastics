import React, {useState, useEffect} from "react";
import Location from "../Components/AreaSelector/Location";
import Area from "../Components/AreaSelector/Area";
import Nav from "../Components/Nav";

const AreaSelector = ()=>{
    const [latitude, setLatitude] = useState(0,0);
    const [longitude, setLongitude] = useState(0,0);
    
    
    useEffect(() => {
        
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLatitude = position.coords.latitude;
              const userLongitude = position.coords.longitude;
              setLatitude(userLatitude);
              setLongitude(userLongitude);
            },
            (error) => {
              console.error("Error getting location:", error);
            }
          );
        } else {
          console.error("Geolocation not supported");
        }
      }, []);

    return(
        <section className="flex justify-center bg-gray-400 min-h-screen mt-0">
          <div className='absolute z-10'>
            <img src='./Status Bar - iPhone.png'></img>
          </div>
          <div className="w-[375px] bg-white relative">
            <h1 className="text-center font-bold font-Inter text-[21.25px] leading-6 mt-[72px]">Area Selector</h1>
            <div className="flex flex-col items-center h-[368px] mt-[44px]">
              <Location latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude}/>
              <Area latitude={latitude} longitude={longitude}/>
            </div>
            <div className="absolute bottom-0 w-full">
              <Nav />
            </div>
        </div>
        </section>
    )
};

export default AreaSelector;