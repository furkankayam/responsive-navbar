import React from "react";
import "./App.css";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const App = () => {
  const [onOrOff, setOnOrOff] = useState(false);

  const e = onOrOff ? "top-[14%] duration-700" : "top-[-100%] duration-700";

  const classNameNav = `md:static absolute md:bg-inherit bg-[#006494] left-0 md:h-[100px] h-[60vh] md:pt-0 pt-[70px] w-full flex md:justify-center items-start px-5 ${e}`;

  const onClickBtn = () => {
    if (onOrOff == true) {
      setOnOrOff(false);
    } else {
      setOnOrOff(true);
    }
  };

  //top-[14%]

  return (
    <div className="bg-[#0c2a38] h-screen">
      <header className="bg-[#032030]">
        <nav className="flex justify-between w-[92%] mx-auto">
          <div>
            <a href="#">
              <h1 className="text-5xl text-white font-bold h-[100px] flex flex-col justify-center hover:text-[#006494] duration-500">
                Hello.
              </h1>
            </a>
          </div>
          <div className={classNameNav}>
            <ul className="flex md:flex-row flex-col md:gap-6 gap-7 text-white text-xl h-[100px] md:items-center">
              <li>
                <a className=" hover:text-gray-400 duration-300" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className=" hover:text-gray-400 duration-300" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a className=" hover:text-gray-400 duration-300" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className=" hover:text-gray-400 duration-300" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a className=" hover:text-gray-400 duration-300" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <button className="bg-[#006494] px-3 py-2 text-white hover:bg-[#2c5d74] duration-300 h-[100px] flex justify-center items-center">
              Sign in
            </button>
            <MdOutlineMenu
              color="white"
              size={30}
              className="cursor-pointer md:hidden"
              onClick={onClickBtn}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default App;
