import React, { Component } from 'react'

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

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  render() {
    const { currentMedia, href } = this.state
    return (
      <div className='links-and-files'>
        {/* <div className='media-icons'>
          <img
            src='../images/issuu-logo.png'
            className={`icon ${
              currentMedia.includes('ISSUU') ? 'selected' : ''
            }`}
            onClick={() =>
              this.selectMedia(
                'ISSUU design portfolio',
                'https://issuu.com/skwrl/docs/pportfolio'
              )
            }
          />
          <img
            src='../images/document-logo.svg'
            className={`icon ${
              currentMedia.includes('resume') ? 'selected' : ''
            }`}
            onClick={() =>
              this.selectMedia('View resume', '../images/YuvaChangResume.pdf')
            }
          />
          <img
            src='../images/ghlogo.svg'
            className={`icon ${
              currentMedia.includes('GitHub') ? 'selected' : ''
            }`}
            onClick={() =>
              this.selectMedia('View GitHub', 'https://github.com/yuvachang')
            }
          />
          <img
            src='../images/linkedin-logo.svg'
            className={`icon ${
              currentMedia.includes('LinkedIn') ? 'selected' : ''
            }`}
            onClick={() =>
              this.selectMedia(
                'LinkedIn',
                'https://www.linkedin.com/in/yuvachang/'
              )
            }
          />
          <img
            src='../images/instagram-logo.svg'
            className={`icon ${
              currentMedia.includes('Instagram') ? 'selected' : ''
            }`}
            onClick={() =>
              this.selectMedia(
                'Instagram',
                'https://www.instagram.com/mrskwrl/'
              )
            }
          />
        </div>

        <a
          className='button'
          href={href}
          target='_blank'
          style={{ fontSize: '0.9em' }}>
          {currentMedia}
        </a> */}

        {/* <a className='button'>
          <img src='../images/document-logo.svg' className='icon' />
          <div className='button-message'>resume</div>
        </a>
        <a className='button'>
          <img src='../images/ghlogo.svg' className='icon' />
          <div className='button-message'>github</div>
        </a>
        <a className='button'>
          <img src='../images/linkedin-logo.svg' className='icon' />
          <div className='button-message'>linkedin</div>
        </a>
        <a className='button'>
          <img src='../images/instagram-logo.svg' className='icon' />
          <div className='button-message'>instagram</div>
        </a>
        <a className='button'>
          <img src='../images/issuu-logo.png' className='icon' />
          <div className='button-message'>ISSUU portfolio</div>
        </a> */}
        <div className='media-icons'>
          <a href='https://github.com/yuvachang' target='_blank' title='Github'>
            <img src='../images/ghlogo.svg' className='icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/yuvachang/'
            target='_blank'
            title='LinkedIn'>
            <img src='../images/linkedin-logo.svg' className='icon' />
          </a>
          <a
            href='https://issuu.com/skwrl/docs/pportfolio'
            target='_blank'
            title='ISSUU portfolio'>
            <img
              src='../images/issuu-logo.png'
              className='icon'
              style={{ width: '21px', height: '21px' }}
            />
          </a>
          <a
            href='https://www.instagram.com/mrskwrl/'
            target='_blank'
            title='Instagram'>
            <img src='../images/instagram-logo.svg' className='icon' />
          </a>
        </div>
        <a
          className='button'
          href='../images/YuvaChangResume.pdf'
          target='_blank'>
          resume
        </a>
      </div>
    )
  }
}

export default LinksAndFiles
