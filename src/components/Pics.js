import React from 'react'
import { thumbnails } from './photoUrls'
import SinglePhoto from './SinglePhoto'

export default function Pics() {
  return (
    <div className='photos'>

      <SinglePhoto /> 
      {thumbnails.map(url => {
        return (
          <div key={url} className='image-container-square'>
            <img src={url} className='photo-thumb' />
          </div>
        )
      })}

      <div
        id='backtotop'
        onClick={() => {
          window.scroll({top: 0, left: 0, behavior: 'smooth' })
        }}>
        ^
      </div>

    </div>
  )
}
