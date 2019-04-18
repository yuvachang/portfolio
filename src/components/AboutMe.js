import React from 'react'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='about'>
      <header className='about header'>who am i</header>
        <p className='about p'>
          I am Yuva. I have a background in design and architecture, and just completed a full stack software engineering immersive. 
          
          
          enjoy making furniture, 3D modeling, sewing, fixing cars and motorcycles, building computers and making things. 
        </p>
      </div>
        {/* <hr className='about hr'/> */}
      <div className='about blurb'>
      <header className='about header'>skills</header>
        <p className='about p'>
          javascript, react, redux, express, sequelize, node.js, html, css,
          psql, git, sql, mongodb, mongoose, socket.io, heroku, webpack, rhino,
          vray, photoshop, illustrator, indesign, autocad
        </p>
      </div>
    </div>
  )
}