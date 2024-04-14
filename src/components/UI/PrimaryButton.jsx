function PrimaryButton({ fullWidth, className, secondary, ...props }) {
  // Base classes that apply to all buttons
  let baseClasses =
    "text-sm font-medium rounded-lg px-5 py-2.5 text-center focus:outline-none ring-2 focus:ring-blue-300";

  // Conditional classes based on the `secondary` prop
  if (secondary) {
    baseClasses += " text-gray-700 bg-gray-50 hover:bg-gray-200";
  } else {
    baseClasses += " text-white bg-blue-700 hover:bg-blue-800";
  }

  // Determine button width
  const buttonStyle = {
    width: fullWidth ? "100%" : "auto",
  };

  return (
    <button
      className={`${baseClasses}  ${className}`}
      style={buttonStyle}
      {...props}
    />
  );
}

export default PrimaryButton;
