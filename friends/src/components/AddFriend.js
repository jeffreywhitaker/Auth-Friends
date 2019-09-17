import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postFriend } from '../utils/actions'
import styled from 'styled-components'

function AddFriend({ postFriend }) {
    const [newFriendName, setNewFriendName] = useState('')
    const [newFriendAge, setNewFriendAge] = useState('')
    const [newFriendEmail, setNewFriendEmail] = useState('')

    const addFriend = (e) => {
        e.preventDefault()
        let newFriend = {
            name: newFriendName,
            age: newFriendAge,
            email: newFriendEmail
        }
        postFriend(newFriend)
    }
    return (
        <AddFriendForm onSubmit={addFriend}>
            <input
                type="text"
                name="name"
                value={newFriendName}
                onChange={(e) => {setNewFriendName(e.target.value)}}
            />
            <input
                type="text"
                name="age"
                value={newFriendAge}
                onChange={(e) => {setNewFriendAge(e.target.value)}}
            />
            <input
                type="email"
                name="email"
                value={newFriendEmail}
                onChange={(e) => {setNewFriendEmail(e.target.value)}}
            />
            <button>Add Friend</button>
        </AddFriendForm>
    )
}

const mapStateToProps = state => {
    return {
      friends: state.friends,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { postFriend })(AddFriend)

  // styled components

  const AddFriendForm = styled.form`
    margin: 20px
  `

