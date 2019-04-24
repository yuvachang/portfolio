import React, { Component } from 'react'
import { thumbnails } from './data/photoUrls'
import SinglePhoto from './SinglePhoto'

class Projs extends Component {
  state = {
    photo: '',
    isOpen: false,
  }

  openPhoto = async (url, idx) => {
    if (url) {
      await this.setState({
        photo: url,
        idx,
        isOpen: true,
      })
    } else {
      if (idx > thumbnails.length - 1) {
        idx = 0
      } else if (idx < 0) {
        idx = thumbnails.length - 1
      }
      await this.setState({
        photo: thumbnails[idx],
        idx,
      })
    }
  }

  closePhoto = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <div className='page-container'>
        <SinglePhoto
          photo={this.state.photo}
          isOpen={this.state.isOpen}
          openPhoto={this.openPhoto}
          closePhoto={this.closePhoto}
          idx={this.state.idx}
        />

        <div className='card'>
          <header className='proj header'>EZsplit</header>
          <a href='https://ezsplit.herokuapp.com' target='_blank'>
            <img className='proj-media-icon' src='../images/heroku.png' />
          </a>
          <a href='https://github.com/EZSplit/EZSplit' target='_blank'>
            <img className='proj-media-icon' src='../images/ghlogo.svg' />
          </a>
            <img
              className='proj-pic-container'
              src='../images/ezsplit.PNG'
              onClick={() => this.openPhoto('../images/ezsplit.PNG', null)}
            />
          <p className='about p'>
            EZsplit is a bill-splitting app to manage and itemize receipts for
            shared purchases amongst groups. Users can edit a single receipt
            together in real-time across different devices to claim items and
            build an accruing IOU towards the person who paid the bill.
            <br />
            <br />
            Features:
            <br />
            • Google OAUTH login using Express and Passport.js and local user
            login • Live receipt editing built with React, Redux, and Socket.io
            • Ability to add, remove, and save receipts, groups, friends, and
            receipt images, with MongoDB backend. • Track spendings and IOUs
            with thunk-fetched data.
            <br />
            <br />
            Some contributions:
            <br />
            • Implemented OCR API on backend and routes for parsing and handling
            receipt data as JSON responses.
            <br />
            • Created MongoDB schemas and queries for handling image, users, and
            groups data.
            <br />
            • Wrote front-end components and logic for retrieving displaying and
            calculating debts and data.
            <br />
            <br />
            Please checkout our project video{' '}
            <span className='pop'>
              <a
                className='link'
                href='https://www.youtube.com/watch?v=R901mWeoOOM'
                target='_blank'>
                here
              </a>
            </span>
            , and give it a try the next time you have to split a bill!
            <br />
            <br />
            Built using the MERN stack (MongoDb, Express, React, Node.js).
          </p>
        </div>

        <div className='card'>
          <header className='proj header'>another github browser</header>
          <a
            href='https://github.com/yuvachang/stackathon/tree/master/AnotherGitHubBrowser'
            target='_blank'>
            <img className='proj-media-icon' src='../images/ghlogo.svg' />
          </a>
          <div className='proj-pic-container' src='../images/ezsplit.PNG'>
            <img
              src='../images/ghb1.png'
              className='proj-picture'
              onClick={() => this.openPhoto('../images/ghb1.png', null)}
            />
            <img
              src='../images/ghb2.png'
              className='proj-picture'
              onClick={() => this.openPhoto('../images/ghb2.png', null)}
            />
            <img
              src='../images/ghb3.png'
              className='proj-picture'
              onClick={() => this.openPhoto('../images/ghb3.png', null)}
            />
            <img
              src='../images/ghb4.png'
              className='proj-picture'
              onClick={() => this.openPhoto('../images/ghb4.png', null)}
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
        </div>
      </div>
    )
  }
}

export default Projs
