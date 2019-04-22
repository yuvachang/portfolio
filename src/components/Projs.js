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
          <header className='proj header'>ezsplit</header>
          <img
            className='proj-pic'
            src='../images/ezsplit.PNG'
            onClick={() => this.openPhoto('../images/ezsplit.PNG', null)}
          />
          <p className='about p'>
            ezsplit is a bill-splitting app to manage and itemize receipts for
            shared purchases amongst groups. Users can together edit a single
            receipt across different devices and claim items to build an
            accruing IOU towards the person who paid the bill.
            <br />
            <br />
            Contributions:
            <br />
            <br />
            • Implemented OCR API on backend and routes for parsing and handling
            receipt data as JSON responses.
            <br />
            • Created MongoDB schemas and queries for handling image, users, and
            groups data.
            <br />• Wrote front-end components and logic for retrieving
            displaying and calculating debts and data.
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
            .
            <br />
            Built using the MERN stack (MongoDb, Express, React, Node.js).
          </p>
        </div>

        <div className='card'>
          <header className='proj header'>another github browser</header>
          <div className='proj-pic' src='../images/ezsplit.PNG'>
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
            <a
              href='https://github.com/yuvachang/stackathon/tree/master/AnotherGitHubBrowser'
              target='_blank'>
              <img style={{ width: '25px'}} src='../images/ghlogo.svg' />
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Projs
