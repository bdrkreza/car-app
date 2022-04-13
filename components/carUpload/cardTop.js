export default function CardTop() {
  return (
    <div className="space-y-3 mt-10">
      <h1 className="font-bold text-2xl">BUILD YOUR AD</h1>
      <p className="text-lg">
        You are currently creating a free ad. Items marked with * are required
        fields.
      </p>
      <h2 className="font-medium text-2xl">What you want to sell?</h2>
      <div className=" w-5/12 px-2 py-3 rounded shadow-sm  flex justify-center items-center border-2 dark:bg-gray-800">
        <button
          type="button"
          className=" h-14 inline-flex items-center justify-center rounded-md border   border-gray-300 shadow-sm px-10 py-1 bg-gradient-to-r from-orange-300 to-orange-500 text-lg font-semibold   text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto  "
        >
          Want to Sell Car
        </button>
        <button
          type="button"
          className="mt-3 w-full h-14 inline-flex rounded-md  items-center border border-orange-400 shadow-sm px-10 py-3 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto "
        >
          Want to Sell Bike
        </button>
      </div>
    </div>
  );
}
