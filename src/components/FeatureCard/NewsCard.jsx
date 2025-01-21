import newsImage from "../../assets/image/1.jpg";

const NewsCard = () => {
  return (
    <div className=" border border-black flex flex-col min-h-[20vh] w-[30vw] rounded-lg shadow-xl p-4 mb-5">
      <h1 className="text-3xl mb-6">Title</h1>
      <div className="w-full">
        <img src={newsImage} className="w-full object-cover mb-5 rounded-sm" />
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iure
        veritatis omnis, totam praesentium quos rem quo laborum doloribus ad
        magni repellat voluptatibus, ipsam excepturi commodi laboriosam autem
        sequi aliquid quae, laudantium consectetur porro quisquam ratione quia.
        Voluptatibus a ducimus est, molestiae rem adipisci non aperiam, nulla,
        libero distinctio pariatur?
      </p>
    </div>
  );
};

export default NewsCard;
