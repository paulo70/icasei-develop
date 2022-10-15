import React, { createContext, useState } from 'react'

export const UserContext = createContext()
UserContext.displayName = 'User'

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return <UserContext.Provider value={{ name, setName, email, setEmail}}>{children}</UserContext.Provider>
}

export default UserContextProvider
