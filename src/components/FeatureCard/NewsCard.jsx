import newsImage from "../../assets/image/1.jpg";

const NewsCard = ({item}) => {
  return (
    <div className=" border border-black flex flex-col min-h-[20vh] w-[30vw] rounded-lg shadow-xl p-4 mb-5">
      <h1 className="text-3xl mb-6">{item?.title}</h1>
      <div className="w-full">
        <img src={newsImage} className="w-full object-cover mb-5 rounded-sm" />
      </div>
      <p>
        {item?.description}
      </p>
    </div>
  );
};

export default NewsCard;
