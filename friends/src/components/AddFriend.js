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
            <h2>Add Your New Friend</h2>
            <AddFriendInput
                type="text"
                name="name"
                value={newFriendName}
                placeholder="name"
                onChange={(e) => {setNewFriendName(e.target.value)}}
            />
            <AddFriendInput
                type="text"
                name="age"
                value={newFriendAge}
                placeholder="age"
                onChange={(e) => {setNewFriendAge(e.target.value)}}
            />
            <AddFriendInput
                type="email"
                name="email"
                value={newFriendEmail}
                placeholder="mail@email.com"
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
    display: flex
    flex-direction: column
    width: 200px
    margin: 20px auto
  `

  const AddFriendInput = styled.input`
    margin: 10px
    padding: 10px
  `

