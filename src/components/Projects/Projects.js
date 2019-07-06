import React, { Component } from 'react'

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        {/* <div className='title'>Projects</div> */}

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/webpage_pic.png' />

          <div className='proj-about'>
            <div className='proj-title'>My website</div>
            <div className='proj-techs'>React, GH Pages</div>
            <div className='proj-body'>
              I wanted to write the code for my own site instead of using
              templates and am using React and GitHub Pages for simple static
              site hosting. It is a small project and makes adding photos or
              projects later a simple task.
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
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/split.png' />

          <div className='proj-about'>
            <div className='proj-title'>Split</div>
            <div className='proj-techs'>
              React, Redux, Sass, Firebase/Firestore
            </div>
            <div className='proj-body'>
              I took the idea of EZSplit and made a new app from scratch with
              fewer libraries, more functionality, and Firebase as BaaS.
              <br /> Costs and debts can be calculated by individual amounts
              paid and bills are fairly distributed based on items ordered or
              calculated from uneven cash payments.
              <br />
              Live editing of receipts with groups of friends is achieved with
              Firestore listeners, users are indexed and can be found and added,
              and notifications and confirmations happen live through Firestore.
              <br />
              I may have been a little ambitious with the scale of the app, and
              there are bugs and scaling issues to be determined and worked out.
              <br />
              Please give it a try and let me know what you think!
            </div>
            <div className='proj-links'>
              <a
                href='https://split.yuvachang.com'
                rel='noopener noreferrer'
                target='_blank'
                className='button'>
                Visit
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

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/ezsplit.PNG' />

          <div className='proj-about'>
            <div className='proj-title'>EZ-Split</div>
            <div className='proj-techs'>
              React, Redux, Socket.io, MongoDB, Mongoose, Express, Passport,
              TAGGUN
            </div>
            <div className='proj-body'>
              This is a 3-week MVP team project with Agile methods and built
              using the MERN stack. It is a bill splitting app using an OCR api
              to itemize receipts. Socket.io connections make editing items and
              prices an interactive experience.
              <br /> I learned a lot implementing Passport.js, sockets,
              Mongoose, and managing dataflow with Redux. The goal was to create
              a unique bill-splitting experience with friends.
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

        <div className='proj-card'>
          <img className='proj-image' alt='proj-screenshot' src='/images/projs/ghb-c.jpg' />

          <div className='proj-about'>
            <div className='proj-title'>React Native GitHub Browser</div>
            <div className='proj-techs'>
              React Native, Redux, Android Studio
            </div>
            <div className='proj-body'>
              I wanted to learn React Native and spent a 4 day hackathon
              creating a basic GitHub app. I used basic email authentication for
              logging in, and focused on smooth user navigation using React
              Native Navigation to fetch and display repository data. I learned
              a lot about the native history stack and user flow.
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
