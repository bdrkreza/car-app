import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FcEngineering } from "react-icons/fc";
import { GiMassDriver, GiRailRoad } from "react-icons/gi";

function carDetails() {
  return (
    <div className="p-5">
      {/* 1st row start */}
      <div className="flex justify-between m-2">
          {/* 1st */}
        <AiFillCar />
        <h2>Body*</h2>
        <select name="cars" id="cars">
          <option value="volvo">Select Car</option>
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
        {/* 2nd */}
        <FcEngineering />
        <h2>Engine (cc)</h2>
        <input placeholder="Enter Engine"/>
        {/* 3rd */}
        <GiMassDriver />
        <h2>Drive</h2>
        <select name="cars" id="cars">
          <option value="volvo">Select Car</option>
          <option value="sedan">Front Wheel Drive(FWD)</option>
          <option value="suv">Rear Wheel Drive(RWD)</option>
          <option value="crossover">ALL Wheel Drive(AWD)</option>
          <option value="hatehback">4_Wheel Drive(4WD)</option>
        </select>
      </div>
      {/* 1st row end */}

      {/* 2nd row start */}
      <div className="flex justify-between m-2">
          {/* 1st */}
        <GiRailRoad />
        <h2>Body*</h2>
        <select name="cars" id="cars">
          <option value="volvo">Select Car</option>
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
        {/* 2nd */}
        <FcEngineering />
        <h2>Engine (cc)</h2>
        <input placeholder="Enter Engine"/>
        {/* 3rd */}
        <GiMassDriver />
        <h2>Drive</h2>
        <select name="cars" id="cars">
          <option value="volvo">Select Car</option>
          <option value="sedan">Front Wheel Drive(FWD)</option>
          <option value="suv">Rear Wheel Drive(RWD)</option>
          <option value="crossover">ALL Wheel Drive(AWD)</option>
          <option value="hatehback">4_Wheel Drive(4WD)</option>
        </select>
      </div>
      {/* 2nd row end */}

      {/* 3rd row start */}
      <div className="flex justify-between m-2">
          {/* 1st */}
        <AiFillCar />
        <h2>Body*</h2>
        <select name="cars" id="cars">
          <option value="volvo">Select Car</option>
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
        {/* 2nd */}
        <FcEngineering />
        <h2>Engine (cc)</h2>
        <input placeholder="Enter Engine"/>
        {/* 3rd */}
        <GiMassDriver />
        <h2>Drive</h2>
        <select name="cars" id="cars">
          <option value="volvo">Select Car</option>
          <option value="sedan">Front Wheel Drive(FWD)</option>
          <option value="suv">Rear Wheel Drive(RWD)</option>
          <option value="crossover">ALL Wheel Drive(AWD)</option>
          <option value="hatehback">4_Wheel Drive(4WD)</option>
        </select>
      </div>
      {/* 3rd row end */}
    </div>
  );
}

export default carDetails;
