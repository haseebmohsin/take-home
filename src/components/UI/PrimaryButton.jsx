function PrimaryButton({ fullWidth, className, secondary, ...props }) {
  let baseClasses = `text-sm font-medium rounded-lg px-5 py-2.5 text-center focus:outline-none ring-2 focus:ring-blue-300 ${
    fullWidth ? "w-[100%]" : "w-auto"
  }`;

  if (secondary) {
    baseClasses += " text-gray-700 bg-gray-50 hover:bg-gray-200";
  } else {
    baseClasses += " text-white bg-gray-800 hover:bg-gray-900";
  }

  return <button className={`${baseClasses}  ${className}`} {...props} />;
}

export default PrimaryButton;
