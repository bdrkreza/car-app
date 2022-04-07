export default function Form() {
  return (
    <div>
      <section className="p-6 dark:text-coolGray-100">
        <form
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-coolGray-900 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Contact us
          </h2>
          <div>
            <div>
              <label htmlFor="chassi_number" className="block mb-1 ml-1">
                chassis Number
              </label>
              <input
                id="chassi_number"
                type="name"
                placeholder="Enter chassi number"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-coolGray-800"
              />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="maker"
              className="block text-sm font-medium text-gray-700"
            >
              maker
            </label>
            <select
              id="maker"
              name="name"
              autoComplete="maker-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700"
            >
              model
            </label>
            <select
              id="model"
              name="name"
              autoComplete="model-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 ml-1">Car Grade/Package</label>
            <input
              id="car"
              type="name"
              placeholder="car Grade Package"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-coolGray-800"
            />
          </div>
          <div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Model Year
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <label htmlFor="email" className="block mb-1 ml-1 mt-4">
              Engine Number
            </label>
            <input
              id="engine-number"
              type="name"
              placeholder="enter engine number"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-coolGray-800"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-coolGray-900"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
