import Image from "next/image";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

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

  const handledelete = (e) => {
    console.log(e);
    var deletefileName = e;
    if (deletefileName === -1) {
      return;
      // pictures.splice(deletefileName, 1); // 2nd parameter means remove one item only
    }
    setPictures((list) => [
      ...list.slice(0, deletefileName),
      ...list.slice(deletefileName + 1),
    ]);
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
          <div key={index}>
            <div className="relative">
              <div className="flex justify-between w-full absolute -mt-25  z-40">
                <div className="bg-slate-300 p-2 rounded-full shadow ">
                  <h1 className="text-orange-500">{index + 1}</h1>
                </div>
                <div className="bg-slate-300 p-2 rounded-full shadow">
                  <button
                    className="text-orange-500"
                    onClick={() => handledelete(index)}
                  >
                    <AiFillDelete></AiFillDelete>
                  </button>
                </div>
              </div>
              <Image
                className="z-20 absolute"
                src={imgUrl?.url}
                height={120}
                width={120}
                alt="Image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DropFileInput;
