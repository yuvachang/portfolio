import React, { Component } from 'react'
import { thumbnails } from '../../data/photoUrls'
import SinglePhoto from './SinglePhoto'

class Photography extends Component {
  state = {
    photo: '',
    idx: '0',
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
      // photo: '',
      // idx: 0,
      isOpen: false,
    })
  }

  render() {
    const { photo, idx, isOpen } = this.state

    return (
      <div className='photos-container'>
        <div className='title'>Photography</div>

        <div className='photos'>
          <SinglePhoto
            photo={photo}
            isOpen={isOpen}
            openPhoto={this.openPhoto}
            closePhoto={this.closePhoto}
            idx={idx}
          />

          {thumbnails.map((url, idx) => {
            return (
              <div key={url} className='photos-thumbnail-container'>
                <img
                  alt='thumbnail'
                  src={url}
                  className='photos-thumbnail'
                  onClick={() => this.openPhoto(url, idx)}
                />
              </div>
            )
          })}

          {/* fill in last row, to keep last row flex-wrap left-aligned */}
          <div className='thumbnail-filler' />
          <div className='thumbnail-filler' />
          <div className='thumbnail-filler' />
          <div className='thumbnail-filler' />
          <div className='thumbnail-filler' />
          <div className='thumbnail-filler' />
          <div className='thumbnail-filler' />
          <div className='thumbnail-filler' />
        </div>
      </div>
    )
  }
}

export default Photography
