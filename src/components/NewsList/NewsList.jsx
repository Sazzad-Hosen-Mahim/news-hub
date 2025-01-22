import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../FeatureCard/NewsCard";
import { Link } from "react-router-dom";

const NewsList = () => {
  const { query = "" } = useParams(); // Default to "latest" if category is undefined
  const { name = "latest" } = useParams();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const fetchNewses = async () => {
    try {
      setLoading(true);
      const url = query
        ? `https://api.pewds.vercel.app/prothomalo/search/${query}?start_from=0&per_page=15`
        : `https://api.pewds.vercel.app/prothomalo/collection/${name}?start_from=0&per_page=15`;
      const { data } = await axios.get(url);
      console.log(data.items);
      setNewsList(data?.items || []);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch news.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewses();
  }, [name, query]);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentNews = newsList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(newsList.length / itemPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 lg:px-64 lg:py-16">
        {newsList.length > 0 ? (
          currentNews.map((item, i) => (
            <div key={i} className="">
              <Link to={`/news/${item.id}`}>
                <NewsCard
                  title={item?.story?.headline || item?.headline || "Untitled"}
                  desc={
                    item?.story?.summary ||
                    item?.summary ||
                    "No description available."
                  }
                  image={
                    item?.story?.["hero-image-s3-key"]
                      ? `https://images.prothomalo.com/${item.story["hero-image-s3-key"]}`
                      : item?.["hero-image-s3-key"]
                      ? `https://images.prothomalo.com/${item["hero-image-s3-key"]}`
                      : "https://via.placeholder.com/150"
                  }
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
      <div className="flex justify-center items-center mt-8 mb-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default NewsList;
