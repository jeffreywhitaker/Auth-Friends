import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FriendCard from './FriendCard'

import { getFriends } from '../utils/actions'
import styled from 'styled-components'

function FriendList({ getFriends, friends}) {

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <>
            <FLh2>List of Friends</FLh2>
            <FriendListDiv>
                {friends.map((friend) => {
                    return <FriendCard key={friend.id} friend={friend}/>
                })}
            </FriendListDiv>
        </>
    )
} 

const mapStateToProps = state => {
    return {
      friends: state.friends,
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {getFriends})(FriendList)

  // styled components

  const FriendListDiv = styled.div`
    display: flex
    flex-wrap: wrap
    max-width: 90%
    margin: 0 auto
  `

  const FLh2 = styled.h2`
    margin: 0 auto
  `