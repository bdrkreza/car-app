import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GiComputerFan, GiRailRoad } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { RiGasStationFill } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";

function carDetails() {
  return (
    <div className="mt-7 mb-10 p-8 border rounded-md">
      <h2 className="text-xl ... mb-4 font-bold">Car Details</h2>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4">
        {/* 1st Card Start */}
        <div className="">
          {/* 1st row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <AiFillCar />
              <h3 className="mx-5">Body*</h3>
            </div>
            {/* for input field */}
            <div>
              <select
                name="cars"
                id="cars"
                className="w-56 cta-slogan py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              >
                <option value="volvo">Select Body</option>
                <option value="sedan">Sedan</option>
                <option value="suv">Suv</option>
                <option value="crossover">Crossover</option>
                <option value="hatehback">Hatehback</option>
                <option value="minivan">Minivan</option>
                <option value="van">Van</option>
                <option value="off Roader">Off Roader</option>
                <option value="wagon">Wagon</option>
                <option value="mini MPV">Mini MPV</option>
                <option value="compact">Compact</option>
                <option value="pickup">Pickup</option>
                <option value="coupe">Coupe</option>
                <option value="convertible">Convertible</option>
                <option value="electric">Electric</option>
                <option value="supercar">Supercar</option>
                <option value="hypercar">Hypercar</option>
              </select>
            </div>
          </div>
          {/* 1st row end */}

          {/* 2nd row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <GiRailRoad />
              <h3 className="mx-5">Mileage (km)</h3>
            </div>
            {/* for input field */}
            <div>
              <input
                placeholder="Enter Milage"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              />
            </div>
          </div>
          {/* 2nd row end */}

          {/* 3rd row start */}
          <div className="flex justify-between items-center">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <RiGasStationFill />
              <h3 className="mx-5">Fuel Type*</h3>
            </div>
            {/* for input field */}
            <div>
              <select
                name="cars"
                id="cars"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              >
                <option value="volvo">Select Fuel Type</option>
                <option value="cng">CNG</option>
                <option value="lpg">LPG</option>
                <option value="diesel">Diesel</option>
                <option value="octane">Octane</option>
                <option value="hybrid">Hybrid</option>
                <option value="plug_in_hybrid">Plug-in Hybrid</option>
                <option value="electric">Electric</option>
                <option value="petrol">Petrol</option>
                <option value="fuel_cell_ev">Fuel Cell EV</option>
              </select>
            </div>
          </div>
          {/* 3rd row end */}
        </div>
        {/* 1st Card End */}

        {/* 2nd Card Start */}
        <div className="">
          {/* 1st row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <GiComputerFan />
              <h3 className="mx-5">Engine (cc)</h3>
            </div>
            {/* for input field */}
            <div>
              <input
                placeholder="Enter Engine"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              />
            </div>
          </div>
          {/* 1st row end */}

          {/* 2nd row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <MdAirlineSeatReclineNormal />
              <h3 className="mx-5">No. of Seats</h3>
            </div>
            {/* for input field */}
            <div>
              <input
                placeholder="Enter Seat"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              />
            </div>
          </div>
          {/* 2nd row end */}

          {/* 3rd row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <VscColorMode />
              <h3 className="mx-5">Exterior Colour</h3>
            </div>
            {/* for input field */}
            <div>
              <select
                name="cars"
                id="cars"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              >
                <option value="volvo">Select Color</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="pearl">Pearl</option>
                <option value="red_wine">Red Wine</option>
                <option value="silver">Silver</option>
                <option value="gray">Gray</option>
                <option value="navy_blue">Navy Blue</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="dark_blue">Dark Blue</option>
                <option value="mica_blue">Mica Blue</option>
                <option value="sky_blue">Sky Blue</option>
                <option value="green">Green</option>
                <option value="dark_green">Dark Green</option>
                <option value="orange">Orange</option>
                <option value="sunset Orange">Sunset Orange</option>
                <option value="yellow">Yellow</option>
                <option value="brown">Brown</option>
                <option value="gold">Gold</option>
                <option value="mica Bronze">Mica Bronze</option>
                <option value="beige">Beige</option>
                <option value="purple">Purple</option>
              </select>
            </div>
          </div>
          {/* 3rd row end */}
        </div>
        {/* 2nd Card End */}

        {/* 3rd Card Start */}
        <div className="2xl:mt-0 xl:-mt-4 lg:-mt-4 md:-mt-4 sm:-mt-4">
          {/* 1st row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <GiComputerFan />
              <h3 className="mx-5">Engine (cc)</h3>
            </div>
            {/* for input field */}
            <div>
              <input
                placeholder="Enter Engine"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              />
            </div>
          </div>
          {/* 1st row end */}

          {/* 2nd row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <MdAirlineSeatReclineNormal />
              <h3 className="mx-5">No. of Seats</h3>
            </div>
            {/* for input field */}
            <div>
              <input
                placeholder="Enter Seat"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              />
            </div>
          </div>
          {/* 2nd row end */}

          {/* 3rd row start */}
          <div className="flex justify-between items-center mb-4">
            {/* for icon & text */}
            <div className="flex justify-between items-center">
              <VscColorMode />
              <h3 className="mx-5">Exterior Colour</h3>
            </div>
            {/* for input field */}
            <div>
              <select
                name="cars"
                id="cars"
                className="w-56 py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-400"
              >
                <option value="volvo">Select Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="beige">Beige</option>
                <option value="brown">Brown</option>
                <option value="tan">Tan</option>
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="dark_green">Dark Green</option>
                <option value="two_tone">Two-Tone</option>
                <option value="na">N/A</option>
              </select>
            </div>
          </div>
          {/* 3rd row end */}
        </div>
        {/* 3rd Card End */}
      </div>
    </div>
  );
}

export default carDetails;
