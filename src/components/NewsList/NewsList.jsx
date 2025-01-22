import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../FeatureCard/NewsCard";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)



  const handlePageCahnge = (page)=>{
    setCurrentPage(page)
  }

  const fetchNewses = async () => {
    try {
      const {data} = await axios.get(
        "https://api.pewds.vercel.app/prothomalo/collection/latest?start_from=0&per_page=15"
      );
      console.log(data);
      setNewsList(data);
      // setTotalItems(data?.total-count)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewses();
  }, []);

  console.log(newsList)

  return (
<div>


  {newsList?.items?.length > 0 && newsList?.items.map((item, i) => {
    // console.log(item?.story?.hero-image-s3-key)
    return (
      <div key={i}>
        <h1>{item?.item?.headline[0]}</h1>
        {/* <img 
          src={`https://images.prothomalo.com/${item?.story?.hero-image-s3-key}`} 
          alt="Story image" 
        /> */}
      </div>
    );
  })}
</div>

  );
};

export default NewsList;
