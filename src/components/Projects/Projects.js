import React, { Component } from 'react'

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <div className='title'>Projects</div>

        <div className='proj-card'>
          <div className='proj-image-container'>
            <img className='proj-image' alt='proj-screenshot' src='/images/projs/minesweeper.png' />
          </div>

          <div className='proj-about'>
            <div className='proj-title'>Minesweeper</div>
            <div className='proj-techs'>React, Firebase, Cloud Firestore, Node.js</div>
            <div className='proj-body'>
              Online Minesweeper game replicating the Microsoft original with 3 levels of difficulty
              and a live leaderboard database in Cloud Firestore.
              <br />
              • Firestore database and endpoints for storing and displaying top scores with listener
              for leaderboard that updates as online players win.
              <br />
              • React.js for game state and window event listeners to track mouse R+L clicks for
              setting flags and opening cells.
              <br />• Recursive cascading of empty cells and cell-checking logic ensures smooth
              gameplay and prevents first-click losses.
            </div>
            <div className='proj-links'>
              <a
                href='https://minesweeper.yuvachang.com'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                Play!
              </a>
              <a
                href='https://github.com/yuvachang/minesweeper'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className='proj-card'>
          <div className='proj-image-container'>
            <img className='proj-image' alt='proj-screenshot' src='/images/projs/webpage_pic.png' />
          </div>

          <div className='proj-about'>
            <div className='proj-title'>My website</div>
            <div className='proj-techs'>React.js, Node.js, GH Pages</div>
            <div className='proj-body'>
              Personal portfolio page. Built with React.js frontend and hosted on GitHub Pages. Styled and mobile responsive with SASS.
            </div>
            <div className='proj-links'>
              <a
                href='https://github.com/yuvachang/portfolio'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className='proj-card'>
          <div className='proj-image-container'>
            <img className='proj-image' alt='proj-screenshot' src='/images/projs/split.png' />
          </div>

          <div className='proj-about'>
            <div className='proj-title'>Split</div>
            <div className='proj-techs'>React.js, Redux, Firebase, Cloud Firestore, Node.js</div>
            <div className='proj-body'>
              Expense management SPA with Firebase BaaS. Users track individual or group spendings
              and itemize costs.
              <br />
              • Firebase OAuth, login with email or Google account. Deployed through Firebase
              Hosting.
              <br />
              • Implemented Firestore database querying, notifications and data management with
              redux-thunk middleware, and multi-user live editing of expense items with Firestore
              listeners.
              <br />
              • Mobile responsiveness and styling done with SASS and media query breakpoints.
              <br />
            </div>
            <div className='proj-links'>
              <a
                href='https://split.yuvachang.com'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                Try it!
              </a>
              <a
                href='https://github.com/yuvachang/Split'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className='proj-card'>
          <div className='proj-image-container'>
            <img className='proj-image' alt='proj-screenshot' src='/images/projs/ezsplit.PNG' />
          </div>

          <div className='proj-about'>
            <div className='proj-title'>EZ-Split</div>
            <div className='proj-techs'>
              React.js, Redux, Node.js, Express, Socket.IO, Sequelize, PSQL, Mongoose, MongoDB,
              Passport, Heroku
            </div>
            <div className='proj-body'>
              A full stack web app (capstone) using web sockets and an OCR API to upload and itemize
              receipts. Users collaborate to itemize and split a shared bill.
              <br />
              • Set up and implemented Socket.IO for pub/sub updates of receipt item changes.
              <br />
              • Created React.js components for displaying and multi-user editing of receipt items with
              immutable state through Redux.
              <br />
              • Integrated (Taggun) OCR API and Restful API endpoints for JSON data.
              <br />• Created MongoDB schemas and queries for image and user data in Javascript
              using Mongoose ODM.
            </div>

            <div className='proj-links'>
              <a
                href='https://ezsplit.herokuapp.com'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                Visit
              </a>
              <a
                href='https://github.com/EZSplit/EZSplit'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className='proj-card'>
          <div className='proj-image-container'>
            <img className='proj-image' alt='proj-screenshot' src='/images/projs/ghb-c.jpg' />
          </div>

          <div className='proj-about'>
            <div className='proj-title'>React Native GitHub Browser</div>
            <div className='proj-techs'>React Native, Redux, Node.js, Android Studio</div>
            <div className='proj-body'>
              Browse GitHub user repositories on Android. 4 day stackathon, basic email
              authentication and React Native Navigation for user flow.
            </div>
            <div className='proj-links'>
              <a
                href='https://youtu.be/GURAjh7Iw2A'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
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
