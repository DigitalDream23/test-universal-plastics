import React, {useState} from "react";

const Location =({latitude, longitude, setLatitude, setLongitude})=>{

    const handleLatitudeChange =(e)=>{
        setLatitude(e.target.value);
    };

    const handleLongitudeChange =(e)=>{
        setLongitude(e.target.value);
    }

    return(
        <section className="flex flex-col justify-between">
            <h2 className="text-[17px] font-Inter font-semibold text-[#14143F] mb-[13px]">Location</h2>
            <div className=" h-[66px] w-[343px] flex">
                <div className="w-[171.5px] flex flex-col justify-between">
                    <p className="text-[10.88px] text-[#595977] font-Inter font-semibold leading-3">LATITUDE</p>
                    <div className="bg-[#ECF9FD] h-[45px] rounded-l-md flex">
                        <input type="number" value={latitude} onChange={handleLatitudeChange} className="text-[17px] font-Inter font-normal text-[#246B83] ml-[12px] bg-transparent"/>
                    </div>
                </div>
                <div className="w-[171.5px] flex flex-col justify-between">
                    <p className="text-[10.88px] text-[#595977] font-Inter font-semibold leading-3">LONGITUD</p>
                    <div className="bg-[#ECF9FD] h-[45px] rounded-r-md relative items-center flex">
                        <input type='number' value={longitude} onChange={handleLongitudeChange} className="text-[17px] font-Inter font-normal text-[#246B83] ml-[12px] bg-transparent"/>
                        <div className="w-[1px] h-[24px] bg-[#C4ECFA] absolute left-0 z-10 "></div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Location;