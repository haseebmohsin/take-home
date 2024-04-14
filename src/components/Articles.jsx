const Articles = ({ source, date, time, title, description }) => {
  let borderColor = "";
  if (source === "News Api") {
    borderColor = "border-yellow-400";
  } else if (source === "The Guardian") {
    borderColor = "border-blue-400";
  } else if (source === "The New York Times") {
    borderColor = "border-red-400";
  }

  return (
    <div className={`border p-2 mb-2 ${borderColor}`}>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="text-gray-500 text-sm">Date: {date}</div>
          <div className="text-gray-500 text-sm">Time: {time}</div>
        </div>

        <div className="text-gray-500 text-sm">{source}</div>
      </div>

      <div className="text-lg">{title}</div>
      <div className="text-gray-700 text-sm">{description}</div>
    </div>
  );
};

export default Articles;
