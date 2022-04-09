import Image from "next/image";
import React, { useEffect, useState } from "react";
const DropFileInput = () => {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  console.log(images);
  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrl = [];
    images.forEach((img) => newImageUrl.push(URL.createObjectURL(img)));
    setImageUrls(newImageUrl);
  }, [images]);

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
            onChange={onImageChange}
            className="hidden"
          />
        </label>
      </div>

      {imageUrls.map((imgUrl) => (
        <Image key={imgUrl} height={100} width={100} src={imageUrls} />
      ))}
    </>
  );
};

export default DropFileInput;
