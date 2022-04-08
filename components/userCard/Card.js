import { useEffect, useState } from "react";
import CardImage from "./cardImage";
import CardTop from "./cardTop";
import Form from "./inputForm";

export default function Card() {
  const [cars, setCars] = useState([]);

  const searchHandle = async (e) => {
    let key = e?.target.value;
    let result = await fetch(`http://localhost:3000/api/cars/${key}`);
    result = await result.json();
    setCars(result);
  };

  useEffect(() => {
    searchHandle();
  }, []);

  return (
    <div className="shadow-md dark:text-coolGray-100  ">
      <CardTop/>
      <div className="grid max-w-screen-xl bg-stone-200 mt-5 grid-cols-1 gap-2 px-0 py-5 mx-auto rounded-lg md:grid-cols-2 md:px-12  xl:px-10 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="flex flex-col  justify-between max-w-full p-10 shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
          <h2 className="text-sm font-bold leading-tight lg:text-xl">
            UPLOAD CAR PHOTO*
          </h2>
          <div className="space-y-2">
          
          </div>
          <div className="border-4 mt-5 border-dashed border-gray-400 rounded-lg h-96 lg:h-full">
          <CardImage />
          </div>
   
        </div>
        <Form searchHandle={searchHandle} data={cars} />
      </div>
    </div>
  );
}
