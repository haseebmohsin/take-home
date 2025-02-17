function InputField({ label, type, id, placeholder, className, ...props }) {
  return (
    <div className="">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${className}`}
        placeholder={placeholder}
        required
        {...props}
      />
    </div>
  );
}

export default InputField;
