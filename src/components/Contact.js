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
    if (this.textareaNode.contains(e.target)) {
      this.textareaNode.style.height = '1px'
      this.textareaNode.style.height = `${this.textareaNode.scrollHeight}px`
    }

    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(NAME_ID, this.state.name)
    formData.append(MESSAGE_ID, this.state.message)
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
      .catch(error => {
        console.log(error)
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
  }

  handleSubmit = async e => {
    e.preventDefault()
    await this.sendMessage()
  }

  render() {
    return (
      <div className='page-container'>
        <div className={!this.state.sent ? 'card' : 'card hidden'}>
          <header className='proj header'>Contact Me</header>
          <br />
          {/* {this.state.errorMessage && 'ERROR'} */}
          <form className='form' onSubmit={this.handleSubmit}>
            {/* <label>Email:</label> */}
            <input
              type='email'
              name='emailAddress'
              required={true}
              value={this.state.emailAddress}
              placeholder='Email'
              onChange={this.handleChange}
            />
            {/* <label>Name:</label> */}
            <input
              type='text'
              name='name'
              required={true}
              value={this.state.name}
              placeholder='Name'
              onChange={this.handleChange}
            />
            {/* <label>Message:</label> */}
            <textarea
              type='text'
              name='message'
              required={true}
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
        <div
          className={this.state.sent ? 'card' : 'card hidden'}
          onClick={() => this.setState({ sent: false })}>
          MESSAGE SENT!
          <br />
          click here to send another
        </div>
      </div>
    )
  }
}
