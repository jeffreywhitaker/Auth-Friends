import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteFriend, updateFriend } from '../utils/actions'
import styled from 'styled-components'

function FriendCard({ friend, deleteFriend, updateFriend }) {
    const [updatedFriendName, setupdatedFriendName] = useState('')
    const [updatedFriendAge, setupdatedFriendAge] = useState('')
    const [updatedFriendEmail, setupdatedFriendEmail] = useState('')

    const handleUpdateFriend = (e) => {
        e.preventDefault()
        let updatedFriend = {
            name: updatedFriendName,
            age: updatedFriendAge,
            email: updatedFriendEmail
        }
        updateFriend(updatedFriend)
    }

    const handleDeleteFriend = (e) => {
        e.preventDefault()
        deleteFriend(friend.id)
    }

    return (
        <FriendCardDiv>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
            <button onClick={handleUpdateFriend}>Update</button>
            <button onClick={handleDeleteFriend}>Delete Friend</button>
        </FriendCardDiv>
    )
} 

export default connect(null, {deleteFriend, updateFriend})(FriendCard)

const FriendCardDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 20px auto;
    width: 200px;
`