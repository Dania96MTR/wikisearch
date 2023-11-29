import React from 'react'
import { createPortal } from 'react-dom'
import { useEffect , useState } from 'react'
import RemoveAlert from './RemoveAlert'
export default function FavouriteItem({ pageid , title , snippet  , setFavouriteData   }) {
    const [alert, setAlert] = useState(false)
    const RemoveFromFavourites= () => {
        setFavouriteData(prev => prev.filter(item => item.pageid !== pageid))
    }
      const showremovalAlert = () => {
        setAlert(true)
        document.body.classList.add("hide-overflow")
      }
      const handlebtn =()=>{
        RemoveFromFavourites()
        setAlert(false)
        document.body.classList.remove("hide-overflow")
      }
      const handlecancel =()=>{
        setAlert(false)
        document.body.classList.remove("hide-overflow")
      }
      useEffect(()=>{
        return()=>{
          setAlert(false)
          document.body.classList.remove("hide-overflow")
        }
      }, [])
  return (
    <>
    <div className='result'>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html:snippet }}></div>
            <div className='btns'>
              <a href={`https://en.wikipedia.org/?curid=${pageid}`} target='_blank'>Read more</a>
              <button onClick={showremovalAlert}>Remove from Favourites</button>
            </div>
          </div>
          {alert ? (
            createPortal(
             <RemoveAlert RemoveFromFavourites={RemoveFromFavourites} handlecancel={handlecancel} setAlert={setAlert} />
                ,
            document.body
            )
          ) :null }
    
    
    </>
  )
}
