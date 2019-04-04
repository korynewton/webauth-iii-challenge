import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    state = {
        username: "test1",
        password: "test1",
        department: ""
    }

  render() {
    return (
      <>
        <h2>Registration:</h2>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" id="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
            <input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
            <input type="text" name="department" id="department"placeholder="department" onChange={this.handleChange} value={this.state.department}/>
            <button>Submit</button>
        </form>
      </>
    )
  }

  handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name] : value })
  }

  handleSubmit = event => {
      event.preventDefault();

      axios.post('http://localhost:4000/api/auth/register', this.state)
      .then(res => {
          const { username, password } = this.state
        axios.post('http://localhost:4000/api/auth/login', { username, password }).then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/users')
        }).catch(error => {
            console.log('login error')
        })
      }).catch(error => {
        console.log('registration error')
      })
  }


}
