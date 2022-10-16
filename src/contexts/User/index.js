import React, { createContext, useState } from 'react'
import {emailValidate} from '../../utils/validate'

export const UserContext = createContext()
UserContext.displayName = 'User'

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const handleChange = e => {
    if(!emailValidate(e.target.value)){
      setError('email inválido')
    } else{
      setError(null)
    }

    setEmail(e.target.value)
  }

  return <UserContext.Provider value={{ name, setName, email, setEmail, handleChange, error}}>{children}</UserContext.Provider>
}

export default UserContextProvider
