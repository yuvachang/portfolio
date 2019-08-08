import React from 'react'
// import { aboutme, keywords, skills } from '../../data/aboutme.js'

// const pop = text => {
//   let regex = /[a-zA-Z0-9]/gi
//   let textArr = text.split(' ')
//   return textArr
//     .map((word, idx) => {
//       let wordOnly = word
//         .toLowerCase()
//         .match(regex)
//         .join('')
//       if (keywords.includes(wordOnly)) {
//         // check if phrase is 'software engineer' or 'software engineering'
//         if (word === 'software' && textArr[idx + 1].includes('engineer')) {
//           word = word + ' ' + textArr[idx + 1]
//         }
//         if (textArr[idx - 1] === 'software' && word.includes('engineer')) return
//         return (
//           <span className='pop' key={word + idx}>
//             <a
//               className='link'
//               target='_blank'
//               href={
//                 wordOnly === 'mern' || wordOnly === 'pern'
//                   ? `https://www.google.com/search?q=${wordOnly}+stack`
//                   : `https://www.google.com/search?q=${wordOnly}`
//               }>
//               {word}
//             </a>
//           </span>
//         )
//       }
//       if (word === '<br/>') {
//         return <br />
//       }
//       return word
//     })
//     .reduce((prev, curr) => [prev, ' ', curr])
// }

// const highlightEachWord = text => {
//   return text
//     .split(', ')
//     .map((word, idx) => (
//       <span className='single-pop' key={word + idx}>
//         <a
//           className='link'
//           target='_blank'
//           href={`https://www.google.com/search?q=${word}`}>
//           {word}
//         </a>
//       </span>
//     ))
//     .reduce((prev, curr) => [prev, ', ', curr])
// }

const AboutMe = () => {
  return (
    <div className='home'>
      <div className='about-header'>Skills</div>
      <div className='about-body'>
        Javascript, HTML, CSS, React, Redux, Express, Sequelize, Node.js, Git, Firebase, Cloud Firestore, PostgreSQL, SQL, NoSQL, MongoDb, Mongoose, Socket.io, Heroku, Webpack,
        Rhino-3D, VRay, Adobe {'('}Photoshop, Illustrator, Indesign{')'}, Autocad
      </div>
      <div className='about-header'>Who am I?</div>
      <div className='about-body'>
        I am a software engineer with a background in architecture and design. I recently graduated from a coding boot camp {'('}Fullstack Academy
        {')'} and have skills in Javascript technologies across the stack. Currently seeking work in New York City. 
      </div>
      <div className='about-header'>What I enjoy</div>
      <div className='about-body'>
        I love making things, digital and physical. I enjoy designing and making furniture and am hoping one day will be able to own a full size CNC
        machine. My other hobbies include building water cooled computers, sewing, photography... 
      </div>
    </div>
  )
}

export default AboutMe
