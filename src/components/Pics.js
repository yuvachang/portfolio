import React, { Component } from 'react'
import { thumbnails } from './data/photoUrls'
import SinglePhoto from './SinglePhoto'
import NavButtons from './NavButtons'

class Pics extends Component {
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
      <div className='page-container'>
        <div className='photos'>
          <SinglePhoto
            photo={this.state.photo}
            isOpen={this.state.isOpen}
            openPhoto={this.openPhoto}
            closePhoto={this.closePhoto}
            idx={this.state.idx}
          />

          {thumbnails.map((url, idx) => {
            return (
              <div key={url} className='photo-thumb-container'>
                <img
                  src={url}
                  className='photo-thumb'
                  onClick={() => this.openPhoto(url, idx)}
                />
              </div>
            )
          })}

          <div className='filling-empty-space-thumbs' />
          <div className='filling-empty-space-thumbs' />
          <div className='filling-empty-space-thumbs' />
          <div className='filling-empty-space-thumbs' />
          <div className='filling-empty-space-thumbs' />
          <div className='filling-empty-space-thumbs' />
          <div className='filling-empty-space-thumbs' />
          <div className='filling-empty-space-thumbs' />
        </div>
      </div>
    )
  }
}

export default Pics
