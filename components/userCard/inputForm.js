export default function Form({ searchHandle, data }) {
  return (
    <div>
      
      <section className="p-6 dark:text-coolGray-100">
      
        <form
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-coolGray-900 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-2xl font-bold leading-tight">
          CHOOSE YOUR CAR MODEL
          </h2>
          <div>
            <div>
              <label htmlFor="chassi_number" className="block mb-1 ml-1">
                chassi Number
              </label>
              <input
                id="chassi_number"
                onChange={searchHandle}
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
              {data?.data?.map((p) =>
                p.package_type.map((p) => <option key={p}>{p}</option>)
              )}
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
              {data?.data?.map((p) =>
                p.package_type.map((p) => <option key={p}>{p}</option>)
              )}
            </select>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="maker"
              className="block text-sm font-medium text-gray-700"
            >
              Grade/Package
            </label>
            <select
              id="maker"
              name="name"
              autoComplete="maker-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {data?.data?.map((p) =>
                p.package_type.map((p) => <option key={p}>{p}</option>)
              )}
            </select>
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
                {data?.data?.map((year, index) => (
                  <option key={index}>{year.car_year}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                engines Number
              </label>
              <select
                id="engines_number"
                defaultValue="select"
                name="engines_number"
                autoComplete="engines_number"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {data?.data?.map((p) =>
                  p.engines_number.map((p) => <option key={p}>{p}</option>)
                )}
              </select>
            </div>
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
