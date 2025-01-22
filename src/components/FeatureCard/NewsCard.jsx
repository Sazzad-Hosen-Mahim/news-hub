const NewsCard = ({ title, desc, image, author, time }) => {
  console.log(author);
  return (
    <div className="flex flex-col h-[60vh] w-[20vw] rounded-lg shadow-2xl p-5 mb-20 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-3xl">
      {/* Title Section */}
      <div className="mb-2 overflow-hidden h-[20%] mt-5">
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="flex justify-between mb-5">
        <h1 className="text-sm text-gray-500">{author}</h1>
        <p className="text-sm text-gray-500">
          {new Date(time).toLocaleDateString("en-US", {
            weekday: "short", // Abbreviated weekday (e.g., "Tue")
          })}{" "}
          -{" "}
          {new Date(time).toLocaleDateString("en-US", {
            month: "short", // Abbreviated month (e.g., "Jan")
            day: "2-digit", // Two-digit day (e.g., "21")
            year: "numeric", // Four-digit year (e.g., "2025")
          })}{" "}
          -{" "}
          {new Date(time)
            .toLocaleTimeString("en-US", {
              hour: "2-digit", // Two-digit hour (e.g., "08")
              minute: "2-digit", // Two-digit minute (e.g., "43")
              hour12: true, // 12-hour format with AM/PM
            })
            .toUpperCase()}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full h-[50%]">
        <img
          src={image}
          alt="news"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      {/* Description Section */}
      <div className="mt-4 overflow-hidden h-[30%]">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
