export default function Form({ handleOnChange, data }) {
  const model = data?.data?.map((car) => car.model_name);
  return (
    <div>
      <section className="p-6 dark:text-coolGray-100">
        <form
          onSubmit={handleOnChange}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-coolGray-900 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-2xl font-bold leading-tight">
            CHOOSE YOUR CAR MODEL
          </h2>
          <div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="chassi_number" className="block mb-1 ml-1">
                Chassis Number
              </label>

              <input
                id="chassis_number"
                onChange={handleOnChange}
                name="chassis_number"
                type="text"
                placeholder="Enter chassis number"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-orange-500 dark:bg-coolGray-800"
              />
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="maker_name" className="block mb-1 ml-1">
              Maker Name
            </label>

            <input
              id="maker-name"
              onChange={handleOnChange}
              name="maker_name"
              defaultValue={data?.data?.map((car) => car.maker_name.maker_name)}
              type="text"
              placeholder="Enter  your maker name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-orange-500 dark:bg-coolGray-800"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="maker_name" className="block mb-1 ml-1">
              Model Name
            </label>

            <input
              id="model-name"
              onChange={handleOnChange}
              name="model_name"
              defaultValue={model}
              type="text"
              placeholder="Enter  your model name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-orange-500 dark:bg-coolGray-800"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="maker"
              className="block text-sm font-medium text-gray-700"
            >
              Grade/Package
            </label>

            <select
              id="package_type"
              onChange={handleOnChange}
              name="package_type"
              autoComplete="package_type"
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
                onChange={handleOnChange}
                name="car_year"
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
                onChange={handleOnChange}
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
              className="w-full bg-orange-500 text-white py-3.5 px-5 my-2 mx-0 border-none rounded cursor-pointer hover:bg-orange-600"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
