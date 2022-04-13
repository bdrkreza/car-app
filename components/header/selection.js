export default function DropdownMenu({ allCategory, handleChange, category }) {
  return (
    <>
      <div className="col-span-5 sm:col-span-4 mb-3 xl:w-72">
        <label
          htmlFor="country"
          label="select"
          className="block text-sm font-medium text-gray-700"
        >
          Select your car model
        </label>
        <select
          id="country"
          value={category}
          onChange={handleChange}
          name="country"
          autoComplete="country-name"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {allCategory.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </>
  );
}
