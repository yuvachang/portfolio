import React, { Component } from 'react'
import { thumbnails } from './data/photoUrls'
import SinglePhoto from './SinglePhoto'
import NavButtons from './NavButtons'

class Projs extends Component {
  state = {
    photo: '',
    idx: 0,
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
      <div className='projs-container'>
       PROJECTS
      </div>
    )
  }
}

export default Projs
