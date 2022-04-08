export default function CardTop() {
  return (
    <div className="space-y-3 mt-10">
      <h1 className="font-bold">BUILD YOUR AD</h1>
      <p>
        You are currently creating a free ad. Items marked with * are required
        fields.
      </p>
      <h2 className="font-medium">What you want to sell?</h2>
      <div className="max-w-2xl px-8 py-4 rounded shadow-sm border-2 dark:bg-gray-800">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border  border-gray-300 shadow-sm px-4 py-3 bg-gradient-to-r from-orange-300 to-orange-500 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Want to Sell Car
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex rounded-md border border-orange-400 shadow-sm px-4 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Want to Sell Bike
        </button>
      </div>
    </div>
  );
}
