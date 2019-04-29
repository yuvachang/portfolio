import React from 'react'
import { aboutme, keywords, skills } from './data/aboutme.js'
import NavButtons from './NavButtons.js'

const pop = text => {
  let regex = /[a-zA-Z0-9]/gi
  let textArr = text.split(' ')
  return textArr
    .map((word, idx) => {
      let wordOnly = word
        .toLowerCase()
        .match(regex)
        .join('')
      if (keywords.includes(wordOnly)) {
        // check if phrase is 'software engineer' or 'software engineering'
        if (word === 'software' && textArr[idx + 1].includes('engineer')) {
          word = word + ' ' + textArr[idx + 1]
        }
        if (textArr[idx - 1] === 'software' && word.includes('engineer')) return
        console.log(wordOnly)
        return (
          <span className='pop' key={word + idx}>
            <a
              className='link'
              target='_blank'
              href={
                wordOnly === 'mern' || wordOnly === 'pern'
                  ? `https://www.google.com/search?q=${wordOnly}+stack`
                  : `https://www.google.com/search?q=${wordOnly}`
              }>
              {word}
            </a>
          </span>
        )
      }
      if (word==='<br/>') {
        return (
          <br/>
        )
      }
      return word
    })
    .reduce((prev, curr) => [prev, ' ', curr])
}

const highlightEachWord = text => {
  return text
    .split(', ')
    .map((word, idx) => (
      <span className='single-pop' key={word + idx}>
        <a
          className='link'
          target='_blank'
          href={`https://www.google.com/search?q=${word}`}>
          {word}
        </a>
      </span>
    ))
    .reduce((prev, curr) => [prev, ', ', curr])
}

const AboutMe = () => {
  return (
    <div className='page-container'>
      <div className='media-icons' >
        <a href='https://issuu.com/skwrl/docs/pportfolio' target='_blank'>
          <img src='../images/issuu-logo.png' className='proj-media-icon' />
        </a>
        <a href='https://github.com/yuvachang' target='_blank'>
          <img src='../images/ghlogo.svg' className='proj-media-icon' />
        </a>
        <a href='https://www.linkedin.com/in/yuvachang/' target='_blank'>
          <img src='../images/linkedin-logo.svg' className='proj-media-icon' />
        </a>
        <a href='https://www.instagram.com/mrskwrl/' target='_blank'>
          <img src='../images/instagram-logo.svg' className='proj-media-icon' />
        </a>
      </div>

      <div className='about-me'>
        <div className='card'>
          <header className='about header'>who am i</header>
          <p className='about p'>{pop(aboutme)}</p>
        </div>
        <div className='card'>
          <header className='about header'>skills</header>
          <p className='about p pointer'>{highlightEachWord(skills)}</p>
        </div>

        <div className='card'>
          <header className='about header'>resume</header>
          <p className='about p'>
            <a href='../images/YuvaChangResume.pdf' target='_blank' style={{  textDecoration: 'none', color: 'grey' }}>
              <div className='card button'>
                <img
                  src='../images/download-icon.svg'
                  className='proj-media-icon'
                />
                Download PDF
              </div>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
