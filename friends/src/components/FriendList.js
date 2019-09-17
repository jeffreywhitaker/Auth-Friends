import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'

export default function FriendList() {
    const [ friends, setFriends ] = useState([])
    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => console.log(err))
      }, []);



    return (
        <div>
            {friends.map((friend) => {
                return <FriendCard key={friend.id} friend={friend}/>
            })}
        </div>
    )
} 