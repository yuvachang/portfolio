import React, { Component } from 'react'

export default class SinglePhoto extends Component {
  handleClickOutside = event => {
    if (event.target.id === 'large-photo' || event.target.className === 'arrow')
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
    const pUrl = this.props.photo
    const url =
      pUrl[pUrl.length - 5] === 'l'
        ? pUrl.slice(0, -5).concat('h' + pUrl.slice(-4))
        : pUrl
    // const url = this.props.photo
    return (
      <div className={this.props.isOpen ? 'single-photo-container' : 'no-show'}>
        <div>
          <img
            src={'../images/close.svg'}
            alt='image not found'
            id='close'
            onClick={this.props.closePhoto || this.props.closeMenu}
          />
        </div>

        {this.props.idx!==null && (
          <div
            className='arrow'
            style={{ left: '3vw' }}
            onClick={() => this.props.openPhoto(null, this.props.idx - 1)}>
            {'<'}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '80%',
            width: '80%',
            alignContent: 'center',
          }}>
          <img
            src={url}
            id='large-photo'
            className={this.props.isOpen ? '' : 'closed'}
            ref={node => {
              this.node = node
            }}
          />
        </div>
        {this.props.idx!==null && (
          <div
            className='arrow'
            style={{ right: '3vw' }}
            onClick={() => this.props.openPhoto(null, this.props.idx + 1)}>
            {'>'}
          </div>
        )}
      </div>
    )
  }
}
