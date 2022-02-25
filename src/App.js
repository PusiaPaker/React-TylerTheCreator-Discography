import React, { useEffect, useState } from 'react'
import Tyler from './Tyler.json'
import SongsDiscography from './SongsDiscography'
import Pages from './Pages';
import Image from './Image'
import Style from './App.css'

var page = 0;

export default function App() {
  const [Page, setPage] = useState(0)
  const [songs, setSongs] = useState([])
  const [name, setName] = useState("")
  const [year, setYear] = useState()
  const [image, setImage] = useState("")


  useEffect(()=>{
    setPage(page)

    setImage(Tyler.albums.at(Page).image)
    setYear(Tyler.albums.at(Page).date)
    setSongs(Tyler.albums.at(Page).songs)
    setName(Tyler.albums.at(Page).name)
  },[Page])

  function NextPage(){
    page -= 1;
    if(page < 0) page = Tyler.albums.length-1;
    setPage(page)
  }
  function PreviousPage(){
    page += 1;
    if(page > Tyler.albums.length-1) page = 0;
    setPage(page)
  }
  return (
    <div className='everything'>
      <>
      <div className='table'>
        
        <SongsDiscography songs={songs} name={name} year={year} />
        <Pages NextPage={NextPage} PreviousPage={PreviousPage}/>
      </div>

        <Image image={image} />
      </>
    </div>
  )
}
