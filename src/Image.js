import React from 'react'
import Style from './Image.css'

export default function Image({ image }) {
  return (
    <div>
        <img src={image} height='394px'/>
    </div>
  )
}
