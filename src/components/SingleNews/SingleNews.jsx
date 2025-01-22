import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = "https://images.prothomalo.com/";

const SingleNews = () => {
  const { id } = useParams();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNewsDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.pewds.vercel.app/prothomalo/info/${id}`
      );
      setNews(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsDetails();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  console.log(news);

  const imageKey =
    news?.story?.alternative?.home?.default?.["hero-image"]?.[
      "hero-image-s3-key"
    ];

  // console.log(imageKey);

  const getImageUrl = (item) => {
    // console.log();
    if (item?.story?.["hero-image-s3-key"]) {
      return `https://images.prothomalo.com/${item.story?.["hero-image-s3-key"]}`;
    } else if (item?.story?.alternative?.home?.default?.["hero-image"]) {
      return `https://images.prothomalo.com/${item?.story?.alternative?.home?.default?.["hero-image"]?.["hero-image-s3-key"]}`;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 px-5 lg:px-20 py-10">
      <div className="lg:w-2/3 flex flex-col gap-5 p-5">
        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          {news?.story?.headline}
        </h2>
        <div className="flex gap-3 items-center text-sm sm:text-base">
          <p className="text-gray-500">
            {news?.story?.["author-name"]}
            <span className="text-black">:</span>
          </p>
          <p>{news?.story?.metadata?.["author-location"]}</p>
        </div>
        <img
          src={getImageUrl(news)}
          alt={news?.id}
          className="rounded-md object-cover w-full max-h-[60vh]"
        />
        <p className="text-sm sm:text-base lg:text-lg">
          {news?.story?.cards?.map((card, i) => {
            // console.log(card);
            return (
              <div key={i}>
                {card?.["story-elements"].map((element, i) => {
                  console.log("element shown by munna", element);
                  return (
                    <>
                      <div key={i} className="mt-5">
                        {element?.type === "text" && (
                          <div
                            dangerouslySetInnerHTML={{ __html: element?.text }}
                            className="text-justify"
                          />
                        )}

                        {element?.type === "image" && (
                          <img
                            src={`${baseUrl}/${element?.["image-s3-key"]}`}
                            alt={element?.["title"] || "Image"}
                            className="w-full rounded-md"
                          />
                        )}
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
        </p>
      </div>
      <div className="lg:w-1/3 flex flex-col gap-5 mt-10 lg:mt-0">
        {news?.story?.["linked-entities"]?.map((card) => (
          <div
            key={card.id}
            className="flex flex-col gap-3 p-4 bg-slate-100 rounded-lg shadow-md"
          >
            <h1 className="text-black text-lg sm:text-xl">
              {card?.["meta-title"]}
            </h1>
            <h2 className="text-gray-500 text-sm">
              {new Date(card?.["created-at"]).toLocaleString()}
            </h2>
            <p className="font-light text-sm sm:text-base">
              {card?.["meta-description"]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleNews;
