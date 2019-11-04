import React, { Component } from 'react'
import axios from 'axios'

const COUNTER_ID = 'entry.42553904'
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/13aRw7XO7iDj0ij0pzkBe59iTWXrRR-t3QduARH9jPoc/formResponse'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

class LinksAndFiles extends Component {
  state = {
    currentMedia: 'View resume',
    href: '../images/YuvaChangResume.pdf',
  }

  selectMedia = (msg, href) => {
    this.setState({
      currentMedia: msg,
      href,
    })
  }

  resumeDLCounter = () => {
    const formData = new FormData()
    formData.append(COUNTER_ID, 'someone viewed your resume')
    axios
      .post(CORS_PROXY + GOOGLE_FORM_URL, formData)
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className='links-and-files'>
        <div className='media-icons'>
          <a href='https://github.com/yuvachang' rel='noopener noreferrer' target='_blank' title='Github'>
            <img src='../images/icons/ghlogo.svg' alt='github' className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/yuvachang/' rel='noopener noreferrer' target='_blank' title='LinkedIn'>
            <img src='../images/icons/linkedin-logo.svg' alt='linkedin' className='icon' />
          </a>
          <a href='https://issuu.com/skwrl/docs/pportfolio' rel='noopener noreferrer' target='_blank' title='ISSUU portfolio'>
            <img src='../images/icons/issuu-logo.png' alt='issuu' className='icon' style={{ width: '21px', height: '21px' }} />
          </a>
          <a href='https://www.instagram.com/mrskwrl/' rel='noopener noreferrer' target='_blank' title='Instagram'>
            <img src='../images/icons/instagram-logo.svg' alt='instagram' className='icon' />
          </a>
        </div>
        <a className='button' href='../images/YuvaChangResume.pdf' rel='noopener noreferrer' target='_blank' onClick={this.resumeDLCounter}>
          resume 
        </a>
      </div>
    )
  }
}

export default LinksAndFiles
