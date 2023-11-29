import React from 'react'

export default function Searchitem({pageid , title , snippet , setFavouriteData , isFavourite}) {
    const addToFavourites = ()=>{
        setFavouriteData( prev => [...prev , {pageid , title , snippet}])
    }
    const RemoveFromFavourites= () =>{
        setFavouriteData(prev => prev.filter(item => item.pageid !== pageid))
    }
  return (
    <div className='result'>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
          <div className='btns'>
            <a href={`https://en.wikipedia.org/?curid=${pageid}`} target='_blank'>Read more</a>

            { isFavourite ? <button onClick={RemoveFromFavourites}>Remove from Favourites</button> :
            <button onClick={addToFavourites}>Add to Favourites</button>
            }
            
          </div>
        </div>
  )
}
