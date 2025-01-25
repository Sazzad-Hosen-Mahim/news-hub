import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NewsCard from "../FeatureCard/NewsCard";
import { Link } from "react-router-dom";
import TrendingNews from "../Sidebar/TrendingNews";
import WeatherUpdates from "../Sidebar/Weather";
import StockMarket from "../Sidebar/Stock";
import PollWidget from "../Sidebar/Poll";

const NewsList = () => {
  const { query = "" } = useParams();
  const { name = "latest" } = useParams();
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    Number(localStorage.getItem("currentPage")) || 1 // Load saved page
  );
  const [totalPages, setTotalPages] = useState(1);
  const [paginationWindow, setPaginationWindow] = useState([1, 10]);
  const itemsPerPage = 9;

  // Fetch news dynamically based on current page
  const fetchNewses = async (page) => {
    try {
      setLoading(true);
      const startFrom = (page - 1) * itemsPerPage;
      const url = query
        ? `https://api.pewds.vercel.app/prothomalo/search/${query}?start_from=${startFrom}&per_page=${itemsPerPage}`
        : `https://api.pewds.vercel.app/prothomalo/collection/${name}?start_from=${startFrom}&per_page=${itemsPerPage}`;

      const { data } = await axios.get(url);

      setNewsList(data?.items || []);
      const totalCount = data?.["total-count"] || 0;
      setTotalPages(Math.ceil(totalCount / itemsPerPage));
      setLoading(false);
    } catch (err) {
      console.log("Error fetching news:", err);
      setError("Failed to fetch news.");
      setLoading(false);
    }
  };

  // Fetch news on component mount or when page/query/name changes
  useEffect(() => {
    fetchNewses(currentPage);
  }, [name, query, currentPage]);

  // Save the current page in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // Handle page change and scroll to the top of the page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      // Update pagination window
      if (page > paginationWindow[1]) {
        setPaginationWindow([page, page + 9]);
      } else if (page < paginationWindow[0]) {
        setPaginationWindow([page - 9, page]);
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const getImageUrl = (item) => {
    if (item?.story?.["hero-image-s3-key"]) {
      return `https://images.prothomalo.com/${item?.story["hero-image-s3-key"]}`;
    } else if (item?.["hero-image-s3-key"]) {
      return `https://images.prothomalo.com/${item?.["hero-image-s3-key"]}`;
    } else if (
      item?.story?.alternative?.home?.default?.["hero-image"]?.[
        "hero-image-s3-key"
      ]
    ) {
      return `https://images.prothomalo.com/${item?.story?.alternative?.home?.default?.["hero-image"]?.["hero-image-s3-key"]}`;
    }
    return "https://via.placeholder.com/150";
  };

  if (loading) return <div className="">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-1 py-5 lg:py-6 lg:col-span-3 md:col-span-2 ps-5">
          {newsList.length > 0 ? (
            newsList.map((item, i) => (
              <div key={i} className="">
                {console.log(item)}
                {/* Save current page before navigating */}
                <Link
                  to={`/news/${item.id}`}
                  onClick={() =>
                    localStorage.setItem("currentPage", currentPage)
                  }
                >
                  <NewsCard
                    title={
                      item?.story?.headline || item?.headline || "Untitled"
                    }
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
        <div className="bg-blue-100 md:col-span-1 sm:hidden md:block">
          <div className="flex flex-col gap-5 px-5">
            <div>
              <TrendingNews
                news={[
                  {
                    title: "Breaking: New Tech Revolution",
                    thumbnail: "../../../public/breaking.jpg",
                    link: "#",
                  },
                  {
                    title: "World Cup Highlights",
                    thumbnail: "../../../public/earth.jpg",
                    link: "#",
                  },
                ]}
              />
            </div>
            <div>
              <WeatherUpdates
                cities={[
                  {
                    name: "New York",
                    temp: 24,
                    condition: "Sunny",
                    icon: "🌤️",
                  },
                  { name: "London", temp: 18, condition: "Rainy", icon: "🌧️" },
                ]}
              />
            </div>
            <div>
              <StockMarket
                stocks={[
                  { name: "NASDAQ", change: 1.23 },
                  { name: "DOW JONES", change: -0.76 },
                ]}
              />
            </div>
            <div>
              <PollWidget />
            </div>
          </div>
        </div>
      </div>

      {/* pagination start  */}

      <div className="flex justify-center items-center mt-8 mb-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1} // Disable the button when on the first page
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Previous
        </button>

        {Array.from(
          { length: Math.min(10, totalPages - paginationWindow[0] + 1) },
          (_, index) => {
            const page = paginationWindow[0] + index;
            return (
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
            );
          }
        )}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-blue-500 hover:text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NewsList;
