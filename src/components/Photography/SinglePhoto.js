import React, { Component } from 'react'

export default class SinglePhoto extends Component {
  clickListener = event => {
    if (
      event.target.className === 'image-container' ||
      event.target.className === 'photos-preview'
    ) {
      this.props.closePhoto()
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.clickListener)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.clickListener)
  }

  render() {
    const { isOpen, photo } = this.props
    const pUrl = photo
    const url =
      pUrl[pUrl.length - 5] === 'l'
        ? pUrl.slice(0, -5).concat('l' + pUrl.slice(-4)) //concat 'h' for mediumsize pic
        : pUrl

    return (
      <div className={`photos-preview${isOpen ? '' : ' hidden'}`}>
        <div className='image-container'>
          {/* PREV BUTTON */}
          <div
            className='arrow prev'
            onClick={() => this.props.openPhoto(null, this.props.idx - 1)}>
            <img
              src='/images/icons/right-arrow.svg'
              alt='previous'
              className='icon'
              style={{ transform: 'rotate(180deg)', filter: 'invert(1)' }}
            />
          </div>

          {/* PHOTO TO PREVIEW */}
          <img
            alt='previewing'
            src={url}
            className='image'
            ref={node => {
              this.node = node
            }}
          />

          {/* NEXT BUTTON */}
          <div
            className='arrow next'
            onClick={() => this.props.openPhoto(null, this.props.idx + 1)}>
            <img
              src='/images/icons/right-arrow.svg'
              alt='next'
              className='icon'
              style={{ filter: 'invert(1)' }}
            />
          </div>
        </div>
      </div>
    )
  }
}
