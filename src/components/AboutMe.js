import React from 'react'
import { aboutme, keywords } from './data/aboutme.js'

const pop = text => {
  // let regex = /\w+(?:'\w+)*/g;
  let regex = /[a-zA-Z0-9]/gi
  // console.log('MERNb23423.4,l/a?h"dasdf3'.match(regex).join(''))
  let textArr = text.split(' ')
  
  return textArr.map(word => {
    if (keywords.includes(word.match(regex).join('')))
      return <span className='pop'>{word}</span>
    return word
  }).reduce((prev, curr) => [prev, ' ', curr])
  
}

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='about'>
        <header className='about header'>who am i</header>
        <p className='about p'>{pop(aboutme)}</p>
      </div>
      <div className='about blurb'>
        <header className='about header'>skills</header>
        <p className='about p'>
          javascript, react, redux, express, sequelize, node.js, html, css,
          psql, git, sql, nosql, mongodb, mongoose, socket.io, heroku, webpack,
          rhino, vray, photoshop, illustrator, indesign, autocad
        </p>
      </div>
    </div>
  )
}
