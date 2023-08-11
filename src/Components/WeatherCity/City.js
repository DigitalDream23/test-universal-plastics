import React, {useState} from "react";
import {cityArray} from '../../Library/MockArray';

const City = ({setSelectedCity}) => {

    const setCity = (event) => {
        const parsedId = parseInt(event.target.value, 10);
        const findCity = cityArray.find((city) => city.id === parsedId);
        setSelectedCity(findCity);
    }
    return(
        <section className="w-[343px] mb-[15px]">
            <h2 className="text-[17px] font-Inter font-semibold text-[#14143F] mb-[15px] leading-3">City</h2>
            <select onChange={setCity} className="w-full h-[45px] pl-2 rounded-md bg-[#ECF9FD] font-Inter font-normal text-[17px] leading-4 text-[#246B83]">
                <option value="" disabled selected>Select City
                </option>
                {cityArray.map((item) => (
                    <option key={item.id} value={item.id} >
                        {item.city}
                    </option>
                   ))}
            </select>
        </section>
    )
};

export default City;


