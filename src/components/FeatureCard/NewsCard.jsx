// const NewsCard = ({ title, desc, image }) => {
//   return (
//     <div className="flex flex-col min-h-[30vh] w-[20vw] rounded-lg shadow-2xl p-5 mb-20 ">
//       <h1 className="text-2xl mb-6">{title}</h1>
//       <div className="w-full h-full object-cover rounded-sm">
//         <img src={image} className="w-full object-cover mb-5 rounded-sm" />
//       </div>
//       <p>{desc}</p>
//     </div>
//   );
// };

// export default NewsCard;

// const NewsCard = ({ title, desc, image }) => {
//   return (
//     <div className="flex flex-col h-[40vh] w-[20vw] rounded-lg shadow-2xl p-5 mb-20">
//       {/* Title section with fixed height */}
//       <h1 className="text-2xl mb-4 h-[10%] line-clamp-2">{title}</h1>

//       {/* Image section with fixed height */}
//       <div className="w-full h-[50%]">
//         <img
//           src={image}
//           alt="news"
//           className="w-full h-full object-cover rounded-sm"
//         />
//       </div>

//       {/* Description section with fixed height */}
//       <p className="h-[30%] overflow-hidden line-clamp-3">{desc}</p>
//     </div>
//   );
// };

// export default NewsCard;

const NewsCard = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col h-[60vh] w-[20vw] rounded-lg shadow-2xl p-5 mb-20 overflow-hidden ">
      {/* Title Section */}
      <div className="mb-4 overflow-hidden h-[20%] mt-5">
        <h1 className="text-xl">{title}</h1>
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
