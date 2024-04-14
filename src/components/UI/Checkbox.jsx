const Checkbox = ({ label, checked, onChange }) => {
  let color;

  if (label === "News Api") {
    color = "yellow-600";
  } else if (label === "The Guardian") {
    color = "blue-600";
  } else if (label === "The New York Times") {
    color = "red-600";
  }

  return (
    <div className="flex items-center me-4">
      <input
        checked={checked}
        onChange={onChange}
        id={`${label.toLowerCase().replace(/\s/g, "-")}-checkbox`}
        type="checkbox"
        value=""
        className={`w-4 h-4 text-${color} bg-gray-100 border-gray-300 rounded focus:ring-${color} focus:ring-2 cursor-pointer`}
      />

      <label
        htmlFor={`${label.toLowerCase().replace(/\s/g, "-")}-checkbox`}
        className="ms-2 text-sm font-medium text-gray-900 cursor-pointer whitespace-nowrap"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
