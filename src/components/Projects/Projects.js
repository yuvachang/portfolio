import React, { Component } from 'react'

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <div className='title'>Projects</div>
        {/* <div className='description'>These are some of my coding projects, both from school and personal. </div> */}

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/minesweeper.png' />

          <div className='proj-about'>
            <div className='proj-title'>Minesweeper</div>
            <div className='proj-techs'>Javascript, React, GH Pages</div>
            <div className='proj-body'>
              I have loved Minesweeper since my first Windows computer and have recreated the game in React with fidelity in mind. I made sure to
              implement the dual mouse-click feature that allowed for speed playing.
              <br />
              A minor improvement I added over the Microsoft original is the riskless first click, ensuring the first cell you click is never a mine
              and guarantees an opening cascade of cells. No more 0.2-second losses!
              <br />
              {/* Features: Set flags or '?'s with RMB, R+LMB opening of surrounding cells if neighboring flag-count matches neighboring mine-count, R+LMB
              highlights surrounding cells, opening cells with no surrounding mines opens itself and all surrounding cells recursively...
              <br /> */}
              It's my favorite game. Please try it!
            </div>
            <div className='proj-links'>
              <a href='https://yuvachang.github.io/minesweeper/' rel='noopener noreferrer' target='_blank' className='button'>
                Play!
              </a>
              <a href='https://github.com/yuvachang/minesweeper' rel='noopener noreferrer' target='_blank' className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/webpage_pic.png' />

          <div className='proj-about'>
            <div className='proj-title'>My website</div>
            <div className='proj-techs'>React, GH Pages</div>
            <div className='proj-body'>
              Written with React and GitHub Pages for simple static site hosting. I wanted to write the code for my own site instead of using a
              template. The small project makes adding data or updating information later a simple task.
            </div>
            <div className='proj-links'>
              <a href='https://github.com/yuvachang/portfolio' rel='noopener noreferrer' target='_blank' className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/split.png' />

          <div className='proj-about'>
            <div className='proj-title'>Split</div>
            <div className='proj-techs'>React, Redux, Sass, Firebase/Firestore</div>
            <div className='proj-body'>
              Split is a mobile responsive web-app that allows itemizing receipts and calculating individual debts for shared purchases amongst
              groups. Users can edit a single receipt together using Firestore listeners to add, delete, and edit items. User debts are calculated
              based on either total spendings or by balancing uneven cash payments.
              <br />
              This is a personal project created from scratch using React, Redux and Firebase as BaaS. Since the app is meant to be used outside or in
              public locations, mobile responsiveness was very important, along with deployability and zero operation cost in mind. My goal was to
              produce a fully functional app that could be used by friends and family.
              <br />
              Features include: email and Google login, friend management with live notifications, local and db data search, data creation/deletion,
              live editing.
            </div>
            <div className='proj-links'>
              <a href='https://split.yuvachang.com' rel='noopener noreferrer' target='_blank' className='button'>
                Try it!
              </a>
              <a href='https://github.com/yuvachang/Split' rel='noopener noreferrer' target='_blank' className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/ezsplit.PNG' />

          <div className='proj-about'>
            <div className='proj-title'>EZ-Split</div>
            <div className='proj-techs'>React, Redux, Socket.io, MongoDB, Mongoose, Express, Passport, TAGGUN</div>
            <div className='proj-body'>
              This is a 3-week MVP team project with Agile methods and built using the MERN stack. It uses an OCR api to itemize receipts and manage
              costs-splitting. Socket.io connections make editing items and prices an interactive experience.
              <br /> I learned a lot implementing Passport.js, sockets, Mongoose, and managing dataflow with Redux. The goal was to create a unique
              bill-splitting experience with friends.
            </div>
            <div className='proj-links'>
              <a href='https://ezsplit.herokuapp.com' rel='noopener noreferrer' target='_blank' className='button'>
                Visit
              </a>
              <a href='https://github.com/EZSplit/EZSplit' rel='noopener noreferrer' target='_blank' className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/ghb-c.jpg' />

          <div className='proj-about'>
            <div className='proj-title'>React Native GitHub Browser</div>
            <div className='proj-techs'>React Native, Redux, Android Studio</div>
            <div className='proj-body'>
              I wanted to learn React Native and spent a 4 day hackathon creating a basic GitHub app. I used basic email authentication for logging
              in, and focused on smooth user navigation using React Native Navigation to fetch and display repository data. I learned a lot about the
              native history stack and user flow.
            </div>
            <div className='proj-links'>
              <a href='https://youtu.be/GURAjh7Iw2A' rel='noopener noreferrer' target='_blank' className='button'>
                Video demo
              </a>
              <a
                href='https://github.com/yuvachang/stackathon/tree/master/AnotherGitHubBrowser'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
