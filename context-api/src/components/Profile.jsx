import React from 'react'
import { useUserContext } from '../context/userContext'

const Profile = () => {
    const user = useUserContext()
  return (
    <div>Profile- {user}</div>
  )
}

export default Profile