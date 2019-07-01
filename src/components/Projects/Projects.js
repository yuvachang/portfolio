import React, { Component } from 'react'
import { thumbnails } from '../../data/photoUrls'
import SinglePhoto from '../SinglePhoto'

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <div className='title'>Projects</div>
        
        <div className='proj-card'>
          <img className='proj-image' src='/images/ezsplit.PNG' />

          <div className='proj-about'>
            <div className='proj-title'>EZ-Split</div>
            This is a bill splitting and managing app, using an OCR api to
            itemize receipts. Socket.io connections make editing items and
            prices an interactive experience. It was a a 3-week team MVP project
            in an Agile environment and built using the MERN stack. I learned a
            lot implementing Passport.js, sockets, Mongoose, and managing
            dataflow with Redux. The goal was to create a unique bill-splitting
            experience with friends.
            <div className='proj-techs'>
              React, Redux, Socket.io, MongoDB, Mongoose, Express, Passport,
              TAGGUN
            </div>
            <div className='proj-links'>
              <a
                href='https://ezsplit.herokuapp.com'
                target='_blank'
                className='button'>
                Visit
              </a>
              <a
                href='https://github.com/EZSplit/EZSplit'
                target='_blank'
                className='button'>
                Source
              </a>
            </div>
          </div>
        </div>

        <div className='proj-card'>
          <img className='proj-image' src='/images/ezsplit.PNG' />

          <div className='proj-about'>
            <div className='proj-title'>EZ-Split</div>
            This is a bill splitting and managing app, using an OCR api to
            itemize receipts. Socket.io connections make editing items and
            prices an interactive experience. It was a a 3-week team MVP project
            in an Agile environment and built using the MERN stack. I learned a
            lot implementing Passport.js, sockets, Mongoose, and managing
            dataflow with Redux. The goal was to create a unique bill-splitting
            experience with friends.
            <div className='proj-techs'>
              React, Redux, Socket.io, MongoDB, Mongoose, Express, Passport,
              TAGGUN
            </div>
            <div className='proj-links'>
              <a
                href='https://ezsplit.herokuapp.com'
                target='_blank'
                className='button'>
                Visit
              </a>
              <a
                href='https://github.com/EZSplit/EZSplit'
                target='_blank'
                className='button'>
                Source
              </a>
            </div>
          </div>
        </div>

        <div className='proj-card'>
          <img className='proj-image' src='/images/ghb-c.jpg' />

          <div className='proj-about'>
            <div className='proj-title'>React Native GitHub Browser</div>I
            wanted to learn React Native and spent a 4 day hackathon creating a
            basic GitHub app. I used basic email authentication for logging in,
            and focused on smooth user navigation using React Native Navigation
            to fetch and display repository data. I learned a lot about web vs
            mobile history stack and navigation heirarchy.
            <div className='proj-techs'>
              React Native, Redux, Android Studio
            </div>
            <div className='proj-links'>
              {/* <a
                href='https://ezsplit.herokuapp.com'
                target='_blank'
                className='button'>
                Video demo
              </a> */}
              <a
                href='https://github.com/yuvachang/stackathon/tree/master/AnotherGitHubBrowser'
                target='_blank'
                className='button'>
                Source
              </a>
            </div>
          </div>
        </div>

        {/* <div className='card'>
          <header className='proj header'>Android Github Browser</header>
          <a
            href='https://github.com/yuvachang/stackathon/tree/master/AnotherGitHubBrowser'
            target='_blank'>
            <img className='proj-media-icon' src='/images/ghlogo.svg' />
          </a>
          <div className='proj-pic-container' src='/images/ezsplit.PNG'>
            <img
              src='/images/ghb1.png'
              className='proj-picture'
              onClick={() => this.openPhoto('/images/ghb1.png', null)}
            />
            <img
              src='/images/ghb2.png'
              className='proj-picture'
              onClick={() => this.openPhoto('/images/ghb2.png', null)}
            />
            <img
              src='/images/ghb3.png'
              className='proj-picture'
              onClick={() => this.openPhoto('/images/ghb3.png', null)}
            />
            <img
              src='/images/ghb4.png'
              className='proj-picture'
              onClick={() => this.openPhoto('/images/ghb4.png', null)}
            />
          </div>
          <p className='about p'>
            Hackathon React Native app for logging into GitHub using basic
            authentication and viewing user repositories and subdirectories.
            <br />
            <br />
            • Used React Native Navigation to design auth- and user-flow,
            focused on smooth user navigation throughout the app.
            <br />• Made consistent navigation and rendering of correct data
            while moving within the history stack.
            <br />
            <br />
          </p>
        </div> */}
      </div>
    )
  }
}

export default Projects
