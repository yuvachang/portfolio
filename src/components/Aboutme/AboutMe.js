import React from 'react'

const AboutMe = () => {
  return (
    <div className='home'>
      <div className='about-header'>About</div>
      <div className='about-body'>
        {/* Hello! */}
        I am Yuva
        <br />
        <br />
        I'm a software engineer who finds joy and pride in creating dependable solutions for real
        problems, and I am forever passionate in learning how things work to make our lives easier
        --be it code, tools and machines, or furniture and buildings.
      </div>
      <div className='about-header'>Skills</div>
      <div className='about-body'>
      <em>Javascript, ES5, ES6, Typescript, React, Redux, Backbone.js, jQuery, Handlebars, Node.js, Gulp, Git, HTML, CSS, SASS,
        SuiteScript, Firebase, Cloud Firestore, Mocha/Chai, Express, REST, Mongoose, Sequelize, MongoDb, PostgreSQL,
        Heroku, Github Pages, Webpack, Taggun OCR API
        <br />
        Other: Rhino, VRay, Photoshop, Illustrator, Indesign, AutoCAD, SketchUp</em>
      </div>
    </div>
  )
}

export default AboutMe
