import React, { Component } from 'react'
import { thumbnails } from './photoUrls'
import SinglePhoto from './SinglePhoto'

export default class Pics extends Component {
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
        showBackToTop: false,
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

  scrollFunc = (e) => {
    if (window.scrollY > 500 && !this.state.showBackToTop) {
      this.setState({
        showBackToTop: true,
      })
    } else {
      if (window.scrollY < 700 && this.state.showBackToTop) {
        this.setState({
          showBackToTop: false,
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', (e) => this.scrollFunc(e))
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', (e) => this.scrollFunc(e))
  }

  render() {
    return (
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

        <div
          id='backtotop'
          className={this.state.showBackToTop ? '' : 'closed'}
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' })
          }}>
          ^
        </div>
      </div>
    )
  }
}
