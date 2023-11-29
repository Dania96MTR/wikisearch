import React from 'react'

export default function RemoveAlert({ RemoveFromFavourites , handlecancel, setAlert }) {
    const handlebtn =()=>{
        RemoveFromFavourites()
        setAlert(false)
        document.body.classList.remove("hide-overflow")
      }
  return (
    <div className='overlay'>
    <div className='alert'>
      <h3>Are you sure?</h3>
      <div className='btns'>
        <button onClick={handlebtn}>yes, remove</button>
        <button onClick={handlecancel}>no, cancel</button>
      </div>
    </div>
  </div>
  )
}
