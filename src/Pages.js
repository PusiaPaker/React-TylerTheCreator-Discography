import React from 'react'
import Style from './Pages.css'

export default function Pages({ NextPage, PreviousPage }) {
  return (
    <div>
        <button onClick={NextPage}>Prev</button>
        <button onClick={PreviousPage}>Next</button>
    </div>
  )
}
