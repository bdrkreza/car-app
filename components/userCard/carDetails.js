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
          {/* 3rd row end */}
        </div>
        {/* 3rd Card End */}
      </div>
    </div>
  );
}

export default carDetails;
