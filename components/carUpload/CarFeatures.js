import React from "react";

const CarFeatures = () => {
  const carboxs = [
    "Bluetooth",
    "360⁰ View Camera",
    "Alloy Wheels",
    "Memory Seats",
    "Aluminium Interior",
    "DVD Player",
    "Leather Interior",
    "Body Kit",
    "Parking Assist",
    "Cruise Control",
    "Matte Exterior Paint",
    "Push Start Ignition",
    "Heads-Up Display",
    "Sunroof",
    "Apple Carplay / Android Autoplay",
  ];
  return (
    <div>
      <div className="bg-[#efefef] rounded-lg p-9 mb-6">
        <h3 className="font-bold text-xl mt-2 mb-7 ">
          SELECT YOUR CAR FEATURES
        </h3>
        <div className="grid grid-cols-3 grid-rows-5 gap-4 ">
          {carboxs.map((carbox, index) => (
            <div key={index}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="accent-orange-600 i h-5 w-8 "
                ></input>
                <span className="ml-4 text-xl">{carbox}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarFeatures;
