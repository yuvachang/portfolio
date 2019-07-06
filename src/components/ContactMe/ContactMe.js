import React, { Component } from 'react'
import axios from 'axios'

const NAME_ID = 'entry.1769400634'
const MESSAGE_ID = 'entry.1790682624'
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfJWwgmhh2a1DrB1DO__NyzT6tKSSYNDVKMN-xvmMmtG9Kfrw/formResponse'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

export default class ContactMe extends Component {
  state = {
    emailAddress: '',
    name: '',
    message: '',
    errorMessage: false,
    sent: false,
    error: '',
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
        console.error(error)
        this.setState({
          errorMessage: true,
        })
      })
    this.messageSent()
  }

  validate = email => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    // sourced from: https://flaviocopes.com/how-to-validate-email-address-javascript/
    return expression.test(String(email).toLowerCase())
  }

  messageSent = () => {
    this.setState({
      sent: true,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()

    //validation
    const { emailAddress, name, message } = this.state
    if (!emailAddress) {
      this.setState({
        error: 'Please enter an email address',
      })
      return
    } else if (!name) {
      this.setState({
        error: 'Please enter a name',
      })
      return
    } else if (!message) {
      this.setState({
        error: 'Please enter a message',
      })
      return
    }
    if (emailAddress) {
      if (!this.validate(emailAddress)) {
        this.setState({
          error: 'Your email address doesn\'t seem valid',
        })
        return
      }
    }

    await this.sendMessage()
  }

  render() {
    const { sent, error } = this.state
    return (
      <div className='contact-container'>
      <div className={`contact-me ${sent ? 'hidden' : ''}`}>
        <header className='header'>Send me a message!</header>
        {error && (
          <div className='error-msg'>
            <br />
            {error}
          </div>
        )}
        <br />
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='emailAddress'
            value={this.state.emailAddress}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <textarea
            type='text'
            name='message'
            value={this.state.message}
            placeholder='Message'
            onChange={this.handleChange}
            ref={node => {
              this.textareaNode = node
            }}
          />
          <input type='submit' value='Submit' />
        </form>
       
      </div>
      <div
          className={`contact-me ${sent ? '' : 'hidden'}`}
          onClick={() => this.setState({ sent: false })}>
          Thanks for the email!
          <br />
          <div className='alink'>
          Send another
          </div>
        </div>
      </div>
    )
  }
}
