import React from 'react'
import { useUserContext } from '../context/userContext'

const Sidebar = () => {
    const user = useUserContext()
  return (
    <div>Sidebar- {user}</div>
  )
}

export default Sidebar