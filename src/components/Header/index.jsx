import React, { useContext, useEffect, useState } from 'react'
import { ContentHeader, HeaderTitle, HeaderSubTitle, HeaderUser, UserLogout } from './style'
import PersonIcon from '@mui/icons-material/Person'

import { useNavigate } from 'react-router'
import { UserContext } from '../../contexts/User'
import userToken from '../../hooks/useToken'

const Header = () => {
  const [ userName, setUserName ] = useState('')
  const [ userEmail, setUserEmail ] = useState('')
  const { name, email } = useContext(UserContext)
  const { token } = userToken()

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setUserName('')
    setUserEmail('')
    navigate(0)
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const users = JSON.parse(user)
      setUserName(users.name)
      setUserEmail(users.email)
    }
  }, [])



  return (
    <header>
      <ContentHeader>
        <HeaderTitle>
          YouTube <HeaderSubTitle>Videos</HeaderSubTitle>
        </HeaderTitle>
        { !token ? null : (
          <HeaderUser>
            <PersonIcon /> nome: { userName ? userName : name } || email: { userEmail ? userEmail : email }
            <UserLogout onClick={ handleLogout }>Sair</UserLogout>
          </HeaderUser>
        ) }
      </ContentHeader>
    </header>
  )
}

export default Header
