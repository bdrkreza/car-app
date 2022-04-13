import React from "react";
import { FaCarSide } from "react-icons/fa";
export default function CarAskingPrice() {
  return (
    <>
      <div className="p-4 w-full bg-[#efefef] rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          SET YOUR ASKING PRICE
        </h5>
        <p className="mb-5 text-1xl text-black-900 sm:text-lg dark:text-gray-400">
          Please kindly set the asking price and final price for your car. You
          can also opt for our buyers to call for price of your car.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3 justify-center items-center">
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Asking Price*
            </label>
            <input
              type="text"
              className="mb-6 bg-gray-100 border border-[#f06424] text-gray-900 text-sm    block  w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 "
              value=""
              placeholder="Asking price"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Selling Price*
            </label>
            <input
              type="text"
              className="mb-6  bg-gray-100 border border-[#f06424]  text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Selling Price"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3">
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Add description
            </label>
            <textarea
              id="message"
              rows="4"
              className=" w-full h-14 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Add videos
            </label>
            <input
              type="text"
              className="mb-6 h-14 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value=""
              placeholder="Selling Price"
            />
          </div>
          <div className="w-full mt-7">
            <button
              type="button"
              className=" flex items-center justify-center text-white    w-full h-14 bg-[#f06424] hover:border-white-900  hover:border-2 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5   mr-2 mb-2"
            >
              <FaCarSide className="w-10 h-6 mr-2 " />
              SUBMIT LISTING
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
