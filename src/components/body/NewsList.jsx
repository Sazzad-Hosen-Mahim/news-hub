import axios from "axios"
import { useEffect, useState } from "react"


const NewsList = () => {
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

      {newsList?.collection?.items.map((item)=>{
        return (
            <div>
                {item?.name}
            </div>
        )
      })}
    </div>
  )
}

export default NewsList
