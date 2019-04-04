import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
  state = {
      username: 'test4',
      password: 'password4'
  }  


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
            <button>Submit</button>
        </form>
      </>
    )
  }

  handleSubmit = event => {
      event.preventDefault();

      axios.post('http://localhost:4000/api/auth/login', this.state).then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/users')
      }).catch(err => {
          console.error(err)
      })
  }

  handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
  }

}
