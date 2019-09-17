import React from 'react'
import { connect } from 'react-redux'
import { deleteFriend } from '../utils/actions'
import styled from 'styled-components'

function FriendCard({ friend, deleteFriend }) {
    const handleDeleteFriend = (e) => {
        e.preventDefault()
        deleteFriend(friend.id)
    }
    return (
        <FriendCardDiv>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
            <button onClick={handleDeleteFriend}>Delete Friend</button>
        </FriendCardDiv>
    )
} 

export default connect(null, {deleteFriend})(FriendCard)

const FriendCardDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 20px auto;
    width: 200px;
`