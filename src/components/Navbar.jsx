import React from "react";
import {BiSearch} from 'react-icons/bi'
 
const Navbar = () => {
  return (
    <div>
      <div className="h-20 bg-blue-500 flex">
        <img src="/sas-group2.png" alt="logo_sas" className="mx-auto"/>
      </div>
      <div className="h-20 bg-blue-600 flex flex-row items-center">
        <div className="basis-1/6">

        </div>
        <div className="menu basis-2/3">
            <ul className="flex text-white items-center justify-center font-scand font-light text-base	">
                <li className="p-5">About SAS</li>
                <li className="p-5">Sustainability</li>
                <li className="p-5">Investor relations</li>
                <li className="p-5">Newsroom</li>
                <li className="p-5">Career</li>
                <li className="p-5">Contact</li>
            </ul>
        </div>
        <div className="search-button basis-1/6">
            <button className="text-2xl mt-1"><BiSearch className="fill-white "/></button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
