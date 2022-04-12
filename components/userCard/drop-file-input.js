import Image from "next/image";
import { useState } from "react";

const DropFileInput = () => {
  const [pictures, setPictures] = useState([]);

  const handleImageUpload = (e) => {
    const tempArr = [];
    [...e.target.files].forEach((file) => {
      tempArr.push({
        data: file,
        url: URL.createObjectURL(file),
      });
    });

    setPictures(tempArr);
  };

  return (
    <>
      <div className="text-center">
        <p>Drag & Drop your files here</p>
        <label className="flex flex-col items-center px-4 py-6  cursor-pointer ">
          <svg
            className="w-32 h-16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <input
            multiple
            type="file"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      <div className="flex gap-2 ml-4 flex-wrap">
        {pictures.map((imgUrl, index) => (
          <div key={index} className="relative">
            <Image
              // className="absolute"
              src={imgUrl?.url}
              height={120}
              width={120}
              alt="Image"
            />

            <button className="absolute mr-10">Delete</button>
            {/* <img src={imgUrl?.url} alt="images" className="w-28 h-28" /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default DropFileInput;
