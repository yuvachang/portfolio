import React from 'react'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='about'>
        <header className='about header'>who am i</header>
        <p className='about p'>
          I am a software engineer with a background in design and architecture.
          My skills include Javascript with experience in the MERN and PERN
          stacks. After a bachelors and masters degree in architecture, I spent
          a few years at a small but growing firm, contributing to many aspects
          of architectural design and helping shape their representational
          language. However, I decided to pursue my passion for software and
          enrolled in a software engineering immersive. I am excited about the
          possibilities of software engineering and the potentials of designing
          for practical solutions to real life experiences. My interests align
          with the act of making, and include furniture design and building, 3D
          modeling, sewing, fixing/modding cars and motorcycles, water cooling
          computers...
        </p>
      </div>
      {/* <hr className='about hr'/> */}
      <div className='about blurb'>
        <header className='about header'>skills</header>
        <p className='about p'>
          html, css, javascript, react, redux, express, sequelize, node.js,
          psql, git, sql, nosql, mongodb, mongoose, socket.io, heroku, webpack,
          rhino, vray, photoshop, illustrator, indesign, autocad
        </p>
      </div>
    </div>
  )
}
