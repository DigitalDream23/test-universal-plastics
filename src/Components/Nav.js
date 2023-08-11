import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () =>{
    const location = useLocation();

    console.log(location)
    return(
       <section className="flex w-full h-[83px] justify-center pt-3 border-t-2 border-[#C4ECFA]">
            <div className="mr-[30px] flex flex-col items-center">
                <Link to='/' className="mx-auto">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  className={`w-6 h-6 ${location.pathname === '/weathercity' ? 'stroke-[#ECF9FD]' : 'stroke-[#42C3EE]' }`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </button>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-1 h-1 stroke-none ${location.pathname === '/weathercity' ? 'fill-[#ECF9FD]' : 'fill-[#42C3EE]' }`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="ml-[30px] flex flex-col  items-center">
            <Link to='/weathercity'>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${location.pathname === '/' ? 'fill-[#ECF9FD]' : 'fill-[#42C3EE]' }`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
            </button>
            </Link>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5"  className={`w-1 h-1 stroke-none ${location.pathname === '/' ? 'fill-[#ECF9FD]' : 'fill-[#42C3EE]' }`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
       </section>
    )
};

export default Nav;