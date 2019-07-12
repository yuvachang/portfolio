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
        Javascript, HTML, CSS, React, Redux, Express, Sequelize, Node.js, Git,
        PSQL, SQL, NoSQL, MongoDb, Mongoose, Socket.io, Heroku, Webpack,
        Rhino-3D, VRay, Adobe Suite {'('}Photoshop, Illustrator, Indesign{')'},
        Autocad
      </div>
      <div className='about-header'>Who am I?</div>
      <div className='about-body'>
        I am a web developer recently graduated from Fullstack Academy boot camp
        and have a former background in design and architecture. My skills at
        the moment are centered around the Node.js environment and a React/Redux
        frontend, and I have backend experience working with Express, PSQL,
        MongoDB, and Firebase/Firestore. I am looking for work opportunities
        where I can learn and develop more skills to continue pursuing my
        passion for design and making.
      </div>
      <div className='about-header'>Why change?</div>
      <div className='about-body'>
        Why leave architecture? I want to pursue more immediate and fair-market design in an increasingly digital world. I love making things physical and digital, and my design thinking and perception of architecture will never leave me. Currently, I wish to focus my skills in a way I feel more meaningful.
      </div>
    </div>
  )
}

export default AboutMe
