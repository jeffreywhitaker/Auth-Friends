import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddFriend extends React.Component {
    state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        friend: {
          ...this.state.friend,
          [e.target.name]: e.target.value
        }
      });
      console.log('log of state after handleChange', this.state)
    };
  
    addFriend = e => {
      e.preventDefault();
      // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
      axiosWithAuth()
        .post('/friends', this.state.friend)
        .then(res => {
          console.log('log from post request', res)
        })
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          <br/>
          <br/>
          <form onSubmit={this.addFriend}>
            <input
              type="text"
              name="name"
              value={this.state.friend.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="age"
              value={this.state.friend.age}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              value={this.state.friend.email}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
    }
  }
  
  export default AddFriend;