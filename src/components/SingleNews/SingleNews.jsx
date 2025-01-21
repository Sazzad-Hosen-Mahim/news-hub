import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsDetails();
  }, []);

  //   console.log(id);
  // console.log(news);
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 w-[50vw] flex flex-col gap-5 justify-center px-20">
        <h2 className="text-bold text-3xl">{news?.story?.headline}</h2>
        <div className="flex gap-3 items-center">
          <p className="text-gray-500">
            {news?.story?.["author-name"]}
            <span className="text-black">:</span>
          </p>
          <p className="">{news?.story?.metadata?.["author-location"]}</p>
        </div>
        <img
          src={`https://images.prothomalo.com/${news?.story?.["hero-image-s3-key"]}`}
          alt={news?.id}
          className="rounded-md"
        />
        <p className="text-lg">{news?.story?.summary}</p>
      </div>
      <div className=" ">
        {news?.story?.["linked-entities"].map((card) => {
          return (
            <div
              key={card.id}
              className="flex flex-col gap-3 mt-5 p-4 bg-slate-100 mx-5 rounded-lg"
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-black text-2xl">{card?.["meta-title"]}</h1>
                <h2 className="text-gray-500">
                  {new Date(card?.["created-at"]).toLocaleString()}
                </h2>
                <p className="font-light">{card?.["meta-description"]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleNews;
