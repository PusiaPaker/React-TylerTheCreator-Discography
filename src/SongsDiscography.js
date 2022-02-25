import React from 'react'
import Style from './SongDiscography.css'

export default function SongsDiscography({ songs, name, year, image }) {
  return (
    <div>
        <fieldset>
            <legend>{name} - {year}</legend>
            <div className='items'>
                
                {songs.map(x => (
                    <label key={x}>{x}<br/></label>
                ))}

                
            </div>
        </fieldset>
        <img src={image} height="100px"/>
    </div>
  )
}
