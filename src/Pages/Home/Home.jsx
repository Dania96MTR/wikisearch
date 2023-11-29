import React, { useEffect, useState } from 'react'
import SearchResult from './components/searchresult/searchResult'

export default function Home() {
  const [search , setSearch] = useState('')
  const [results , setResult] = useState([])

  const getResult = async() =>{
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`)
    const data = await res.json()
    setResult(data?.query?.search || [])
  }
  useEffect(()=>{
    getResult()
  }, [search])
  return (
    <main className='container'>
     <h1> Home Page</h1>
     <input
     className='input-search'
     type='text'
     placeholder='Type anything to search'
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     />
     <SearchResult results={results}/>
      </main>
  )
}
