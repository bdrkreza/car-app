import CarDetails from "./carDetails";
import CardTop from "./cardTop";
import DropFileInput from "./drop-file-input";
import Form from "./inputForm";

export default function Card({ data, handleOnChange }) {
  return (
    <div className="dark:text-coolGray-100  ">
      <CardTop />
      <div className="grid max-w-screen-xl bg-newgrey-200 mt-5 grid-cols-3 gap-2 px-0 py-5 mx-auto rounded-lg  xl:px-10 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="flex flex-col  justify-between max-w-full p-10 dark:bg-coolGray-900 dark:text-coolGray-100  col-span-2 ">
          <h2 className="text-sm font-bold leading-tight lg:text-xl ">
            UPLOAD CAR PHOTO*
          </h2>
          <div className="space-y-2"></div>
          <div className="border-4 mt-5 border-dashed bg-white border-gray-400 rounded-lg h-96 md:h-full lg:h-full ">
            <DropFileInput />
          </div>
        </div>
        <Form data={data} handleOnChange={handleOnChange} />
      </div>
      <CarDetails />
    </div>
  );
}
