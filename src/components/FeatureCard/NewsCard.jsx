const NewsCard = ({ title, desc, image, author, time }) => {
  return (
    <div className="flex flex-col h-[60vh] w-[90vw]  sm:w-[70vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] rounded-lg shadow-md p-5 mb-10 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-3xl">
      {/* Title Section */}
      <div className=" overflow-hidden h-[20%] mt-3 mb-5">
        <h1 className="lg:text-xl text-base">{title}</h1>
      </div>
      <div className="flex justify-between mb-5 mt-1">
        <h1 className="lg:text-sm text-xs text-gray-500">{author}</h1>
        <p className="lg:text-sm text-xs text-gray-500">
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
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Description Section */}
      <div className="mt-4 overflow-hidden h-[45%] ">
        <p>{desc}</p>

        <button className="mt-2 text-blue-400">See More</button>
      </div>
    </div>
  );
};

export default NewsCard;
