import React from 'react'

const AboutMe = () => {
  return (
    <div className='home'>
      <div className='about-header'>Skills</div>
      <div className='about-body'>
        HTML, CSS, SASS, Javascript, React, Redux, Node.js, Express, Git, Restful API, Firebase,
        Cloud Firestore, Sequelize, PostgreSQL, NoSQL, Mongoose, MongoDb, Socket.IO, Heroku,
        Webpack, Expo, React Native, Rhino-3D, VRay, Adobe {'('}Photoshop, Illustrator, Indesign
        {')'}, Autocad
      </div>
      <div className='about-header'>About</div>
      <div className='about-body'>
        I am a full stack web developer with a background in architecture and design. I graduated from a full stack Javscript coding boot camp {'('}Fullstack Academy
        {')'} and am actively looking for work in New York City. 
        <br/>
        I'm enthusiastic about the process of making and enjoy building things in my free time. 
      </div>
      {/* <div className='about-header'>What I enjoy</div>
      <div className='about-body'>
        I love making things, digital and physical. I enjoy designing and making furniture and am hoping one day will be able to own a full size CNC
        machine. My other hobbies include building water cooled computers, sewing, photography... 
      </div> */}
    </div>
  )
}

export default AboutMe
