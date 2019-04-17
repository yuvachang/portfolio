import React, { Component } from 'react'

export default class SinglePhoto extends Component {
  handleClickOutside = event => {
    if (
      event.target.id === 'large-photo' ||
      event.target.className === 'arrow'
    )
      return
    this.props.closePhoto()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    const url = this.props.photo.slice(0, -5).concat('h'+this.props.photo.slice(-4))
    // const url = this.props.photo
    return (
      <div className={this.props.isOpen ? 'single-photo-container' : 'no-show'}>
          <div
          className='arrow'
          style={{left:'3vw'}}
          onClick={() => this.props.openPhoto(null, this.props.idx - 1)}>
          {'<'}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', height: '80%', width: '80%', alignContent: 'center'}}>
          <img
            src={url}
            id='large-photo'
            className={this.props.isOpen ? '' : 'closed'}
            ref={node => {
              this.node = node
            }}
          />
        </div>
        <div
          className='arrow'
          style={{right:'3vw'}}
          onClick={() => this.props.openPhoto(null, this.props.idx + 1)}>
          >
        </div>
      </div>
    )
  }
}
