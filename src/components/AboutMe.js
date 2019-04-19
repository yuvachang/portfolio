import React from 'react'
import { aboutme, keywords, skills } from './data/aboutme.js'

const pop = text => {
  let regex = /[a-zA-Z0-9]/gi
  let textArr = text.split(' ')
  return textArr
    .map((word, idx) => {
      let wordOnly = word.toLowerCase().match(regex).join('')
      if (keywords.includes(wordOnly)) {
        // check if phrase is 'software engineer' or 'software engineering'
        if (word === 'software' && textArr[idx + 1].includes('engineer')) {
          word = word + ' ' + textArr[idx + 1]
        }
        if (textArr[idx - 1] === 'software' && word.includes('engineer')) return
        return (
          <span className='pop'>
            <a
              className='link'
              target='_blank'
              href={
                wordOnly === 'mern' || wordOnly === 'pern'
                  ? `https://www.google.com/search?q=${word}+stack`
                  : `https://www.google.com/search?q=${word}`
              }>
              {word}
            </a>
          </span>
        )
      }
      return word
    })
    .reduce((prev, curr) => [prev, ' ', curr])
}

const highlightEachWord = text => {
  return text
    .split(', ')
    .map(word => (
      <span className='single-pop'>
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

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='about'>
        <header className='about header'>who am i</header>
        <p className='about p'>{pop(aboutme)}</p>
      </div>
      <div className='about blurb'>
        <header className='about header'>skills</header>
        <p className='about p pointer'>{highlightEachWord(skills)}</p>
      </div>
    </div>
  )
}
