import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeatureCard = () => {
    const [newsList, setNewsList] = useState([])

    const fetchNewses = async () =>{
        try {
            const response = await axios.get('https://api.pewds.vercel.app/prothomalo/home/');
            console.log(response.data)
            setNewsList(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchNewses()
    }, [])
    
  return (
    <div>
    <h1>News List</h1>
    <h2>{newsList?.customSeo?.title}</h2>

    {newsList?.collection?.items.map((item, i)=>{
      return (
          <Link to="/" key={i}>
             <h1> {item?.name}</h1>
             <h2>{item?.summary}</h2>
          </Link>
      )
    })}
  </div>
  )
}

export default FeatureCard