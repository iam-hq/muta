export default function Select({
  options = [],
  placeholder = "Choose an option",
  selected = "",
  className = "",
  mt = "my-1",
  ...props
}) {
  return (
    <div className={`flex flex-col items-start ${mt} ${className}`}>
      <select
        {...props}
        id="countries"
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        }
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option
            value={option.toString().toLowerCase()}
            selected={option.toString().toUpperCase() == selected.toUpperCase()}
            key={index}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
