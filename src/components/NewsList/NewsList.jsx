

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import NewsCard from "../FeatureCard/NewsCard";
// import { Link } from "react-router-dom";

// const NewsList = () => {
//   const { query = "" } = useParams(); // Default query is empty if not provided
//   const { name = "latest" } = useParams(); // Default name is "latest" if not provided
//   const [newsList, setNewsList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalCount, setTotalCount] = useState(0); // Total count of news items
//   const [startPage, setStartPage] = useState(1); // Start of the current pagination range
//   const itemPerPage = 15; // Items per page
//   const maxVisiblePages = 10; // Maximum number of visible pages

//   // Fetch news items and total count from the API
//   const fetchNewses = async () => {
//     try {
//       setLoading(true);
//       const startFrom = (currentPage - 1) * itemPerPage; // Calculate start index for pagination

//       // Construct the API URL dynamically based on query or name
//       const url = query
//         ? `https://api.pewds.vercel.app/prothomalo/search/${query}?start_from=${startFrom}&per_page=${itemPerPage}`
//         : `https://api.pewds.vercel.app/prothomalo/collection/${name}?start_from=${startFrom}&per_page=${itemPerPage}`;

//       const { data } = await axios.get(url);

//       // Set the news items and total count
//       setNewsList(data?.items || []);
//       setTotalCount(data?.["total-count"] || 0); // Assuming API returns "total-count"
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch news.");
//       setLoading(false);
//     }
//   };

//   // Fetch news items whenever currentPage, name, or query changes
//   useEffect(() => {
//     fetchNewses();
//   }, [currentPage, name, query]);

//   // Calculate the total number of pages based on total count
//   const totalPages = Math.ceil(totalCount / itemPerPage);

//   // Handle page change and scroll to the top of the page
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//     // Update the start page for pagination range
//     if (page > startPage + maxVisiblePages - 1) {
//       setStartPage(page - (maxVisiblePages - 1));
//     } else if (page < startPage) {
//       setStartPage(Math.max(page, 1));
//     }
//   };

//   // Get image URL from the news item
//   const getImageUrl = (item) => {
//     if (item?.story?.["hero-image-s3-key"]) {
//       return `https://images.prothomalo.com/${item?.story["hero-image-s3-key"]}`;
//     }

//     if (item?.["hero-image-s3-key"]) {
//       return `https://images.prothomalo.com/${item?.["hero-image-s3-key"]}`;
//     }

//     const storyElements =
//       item?.story?.alternative?.home?.default?.["hero-image"]?.["hero-image-s3-key"];
//     if (storyElements) {
//       return `https://images.prothomalo.com/${storyElements}`;
//     }

//     return "https://via.placeholder.com/150"; // Fallback image
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Generate visible page numbers
//   const visiblePages = Array.from(
//     { length: Math.min(maxVisiblePages, totalPages - startPage + 1) },
//     (_, index) => startPage + index
//   );

//   return (
//     <>
//       <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 px-5 py-5 lg:px-64 lg:py-16">
//         {newsList.length > 0 ? (
//           newsList.map((item, i) => (
//             <div key={i} className="">
//               <Link to={`/news/${item.id}`}>
//                 <NewsCard
//                   title={item?.story?.headline || item?.headline || "Untitled"}
//                   desc={
//                     item?.story?.summary ||
//                     item?.summary ||
//                     "No description available."
//                   }
//                   image={getImageUrl(item)}
//                   author={item?.story?.["author-name"]}
//                   time={item?.story?.["created-at"]}
//                 />
//               </Link>
//             </div>
//           ))
//         ) : (
//           <div>No news available for this category.</div>
//         )}
//       </div>
//       <div className="flex justify-center items-center mt-8 mb-8">
//         <button
//           onClick={() => handlePageChange(Math.max(currentPage - 10, 1))}
//           disabled={currentPage <= 10}
//           className="px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-blue-500 hover:text-white"
//         >
//           Prev
//         </button>
//         {visiblePages.map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`px-4 py-2 mx-1 rounded ${
//               currentPage === page
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 hover:bg-blue-500 hover:text-white"
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(Math.min(currentPage + 10, totalPages))}
//           disabled={currentPage + 10 > totalPages}
//           className="px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-blue-500 hover:text-white"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default NewsList;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../FeatureCard/NewsCard";
import { Link } from "react-router-dom";

const NewsList = () => {
  const { query = "" } = useParams(); // Default query is empty if not provided
  const { name = "latest" } = useParams(); // Default name is "latest" if not provided
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Total count of news items
  const [startPage, setStartPage] = useState(1); // Start of the current pagination range
  const itemPerPage = 15; // Items per page
  const maxVisiblePages = 10; // Maximum number of visible pages

  // Fetch news items and total count from the API
  const fetchNewses = async () => {
    try {
      setLoading(true);
      const startFrom = (currentPage - 1) * itemPerPage; // Calculate start index for pagination

      // Construct the API URL dynamically based on query or name
      const url = query
        ? `https://api.pewds.vercel.app/prothomalo/search/${query}?start_from=${startFrom}&per_page=${itemPerPage}`
        : `https://api.pewds.vercel.app/prothomalo/collection/${name}?start_from=${startFrom}&per_page=${itemPerPage}`;

      const { data } = await axios.get(url);

      // Set the news items and total count
      setNewsList(data?.items || []);
      setTotalCount(data?.["total-count"] || 0); // Assuming API returns "total-count"
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch news.");
      setLoading(false);
    }
  };

  // Fetch news items whenever currentPage, name, or query changes
  useEffect(() => {
    fetchNewses();
  }, [currentPage, name, query]);

  // Calculate the total number of pages based on total count
  const totalPages = Math.ceil(totalCount / itemPerPage);

  // Handle page change and scroll to the top of the page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (startPage + maxVisiblePages <= totalPages) {
      setStartPage(startPage + 3);
      setCurrentPage(currentPage);
    }
  };

  const handlePrev = () => {
    if (startPage > 3) {
      setStartPage(startPage - 3);
      setCurrentPage(startPage - 3);
    }
  };

  // Get image URL from the news item
  const getImageUrl = (item) => {
    if (item?.story?.["hero-image-s3-key"]) {
      return `https://images.prothomalo.com/${item?.story["hero-image-s3-key"]}`;
    }

    if (item?.["hero-image-s3-key"]) {
      return `https://images.prothomalo.com/${item?.["hero-image-s3-key"]}`;
    }

    const storyElements =
      item?.story?.alternative?.home?.default?.["hero-image"]?.["hero-image-s3-key"];
    if (storyElements) {
      return `https://images.prothomalo.com/${storyElements}`;
    }

    return "https://via.placeholder.com/150"; // Fallback image
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Generate visible page numbers
  const visiblePages = Array.from(
    { length: Math.min(maxVisiblePages, totalPages - startPage + 1) },
    (_, index) => startPage + index
  );

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 px-5 py-5 lg:px-64 lg:py-16">
        {newsList.length > 0 ? (
          newsList.map((item, i) => (
            <div key={i} className="">
              <Link to={`/news/${item.id}`}>
                <NewsCard
                  title={item?.story?.headline || item?.headline || "Untitled"}
                  desc={
                    item?.story?.summary ||
                    item?.summary ||
                    "No description available."
                  }
                  image={getImageUrl(item)}
                  author={item?.story?.["author-name"]}
                  time={item?.story?.["created-at"]}
                />
              </Link>
            </div>
          ))
        ) : (
          <div>No news available for this category.</div>
        )}
      </div>
      {/* pagination start */}
      <div className="flex justify-center items-center mt-8 mb-8">
        <button
          onClick={handlePrev}
          disabled={startPage === 1}
          className="px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-blue-500 hover:text-white"
        >
          Prev
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={startPage + maxVisiblePages > totalPages}
          className="px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-blue-500 hover:text-white"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NewsList;

