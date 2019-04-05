import React, { Component } from 'react'
import axios from 'axios';

export default class Users extends Component {
    state = {
        users: []
    }
  render() {
    return (
      <>
        <h2>Users:</h2>
        {this.state.users.map(u => <h4 key={u.id}>{u.username}</h4>)}
      </>
    )
  }

  componentDidMount() {
      const token = localStorage.getItem('token');
      const reqHeader = {
          headers : {
              authorization: token
          }
      }
      axios.get('http://localhost:4000/api/users', reqHeader).then(res => {
        this.setState({ users: res.data})
      }).catch(error => {
        console.log(error)
      })
  }

}
