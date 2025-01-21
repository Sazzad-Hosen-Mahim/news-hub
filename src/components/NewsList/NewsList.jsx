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
      <h2>{newsList?.customSeo?.title}</h2>

      {newsList?.collection?.items.map((item, i)=>{
        return (
<<<<<<< HEAD:src/components/body/NewsList.jsx
            <div>
                {item?.name}
                {item?.summary}
=======
            <div key={i}>
                <h1>{item?.name}</h1>
                <p>{item?.summary}</p>
>>>>>>> 896de9579792194cdb970d15e499431e001ee6f5:src/components/NewsList/NewsList.jsx
            </div>
        )
      })}
    </div>
  )
}

export default NewsList
