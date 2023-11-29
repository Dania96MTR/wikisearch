import React, { useEffect, useState } from 'react'
import FavouriteItem from './FavouriteItem'
const getDataFromLocal = () => {
  const storedData = localStorage.getItem("Data")
  if (storedData) {
    return JSON.parse(storedData)
  }
  return []
}
export default function Favourites() {
  const [favouriteData, setFavouriteData] = useState(getDataFromLocal())
 


  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(favouriteData))
}, [favouriteData])

  
  return (
    <div className='container'>
      <h1>Your Favourites</h1>
      {favouriteData.length === 0 ? <p>No favourites</p> : null}
      {favouriteData.map(article => (
        <FavouriteItem key={article.pageid} 
        pageid={article.pageid}
        title={article.title}
        snippet={article.snippet}
        setFavouriteData={setFavouriteData}
     />
      ))}
    </div>
  )
}
