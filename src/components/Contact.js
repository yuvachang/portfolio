import React, { Component } from 'react'
import axios from 'axios'

const NAME_ID = 'entry.1769400634'
const MESSAGE_ID = 'entry.1790682624'
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfJWwgmhh2a1DrB1DO__NyzT6tKSSYNDVKMN-xvmMmtG9Kfrw/formResponse'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

export default class Contact extends Component {
  state = {
    emailAddress: '',
    name: '',
    message: '',
    errorMessage: false,
    sent: false,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })

    if (this.textareaNode.contains(e.target)) {
      console.log('height:', this.textareaNode.offsetHeight, 'scrollheight:', this.textareaNode.scrollHeight)
      this.textareaNode.style.height = `${this.textareaNode.scrollHeight}px`
    }
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(NAME_ID, this.state.name)
    formData.append(MESSAGE_ID, this.state.email)
    formData.append('emailAddress', this.state.emailAddress)
    axios
      .post(CORS_PROXY + GOOGLE_FORM_URL, formData)
      .then(() => {
        this.setState({
          emailAddress: '',
          name: '',
          message: '',
        })
      })
      .catch(() => {
        this.setState({
          errorMessage: true,
        })
      })
    this.messageSent()
  }

  messageSent = () => {
    this.setState({
      sent: true,
    })
    window.setTimeout(() => {
      this.setState({ sent: false })
    }, 2000)
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log('HANDLE SUBMIT', this.state)
    await this.sendMessage()
  }

  render() {
    return (
      <div className='page-container'>
        <div className={!this.state.sent ? 'card' : 'card hidden'}>
          <header className='proj header'>Contact Me</header>
          {this.state.errorMessage && 'ERROR'}
          <form onSubmit={this.handleSubmit}>
            {/* <label>Email:</label> */}
            <input
              type='email'
              name='emailAddress'
              value={this.state.emailAddress}
              placeholder='Email'
              onChange={this.handleChange}
            />
            {/* <label>Name:</label> */}
            <input
              type='text'
              name='name'
              value={this.state.name}
              placeholder='Name'
              onChange={this.handleChange}
            />
            {/* <label>Message:</label> */}
            <textarea
              type='text'
              name='message'
              value={this.state.message}
              placeholder='Enter a message'
              onChange={this.handleChange}
              ref={node => {
                this.textareaNode = node
              }}
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div className={this.state.sent ? 'card' : 'card hidden'} />
      </div>
    )
  }
}
