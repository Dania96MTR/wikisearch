import React, { useEffect, useState } from 'react'
import Searchitem from '../SearchItem/Searchitem'
const getDataFromLocal = ()=>{
  const storedData = localStorage.getItem("Data")
  if(storedData){
    return JSON.parse(storedData)
  }
  return []
}
export default function SearchResult({ results }) {
  const [favouriteData , setFavouriteData] = useState(getDataFromLocal())
  const IDofFavourites = favouriteData.map(Data => Data.pageid)
  useEffect(()=>{
    localStorage.setItem("Data" , JSON.stringify(favouriteData))
  }, [favouriteData])
  if (results.length === 0) {
    return <p>No results here, try searching for something...</p> 
  }
  return (
    <div>
      {results.map(result => (
        <Searchitem key={result.pageid}
         pageid={result.pageid}
          title={result.title} 
          snippet={result.snippet}
          setFavouriteData={setFavouriteData}
          isFavourite={IDofFavourites.includes(result.pageid)}
          />
      ))}
    </div>
  )
}
