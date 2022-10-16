import React, { useContext } from 'react'
import { ContentHeader, HeaderTitle, HeaderSubTitle, HeaderUser, UserLogout } from './style'
import PersonIcon from '@mui/icons-material/Person'

import { UserContext } from '../../contexts/User'
import { useNavigate } from 'react-router'

const Header = () => {
  const { name, email } = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate(-1)
  }

  return (
    <header>
      <ContentHeader>
        <HeaderTitle>
          YouTube <HeaderSubTitle>Videos</HeaderSubTitle>
        </HeaderTitle>
        <HeaderUser>
          <PersonIcon /> nome: {name} || email: {email}
          <UserLogout onClick={handleLogout}>Sair</UserLogout>
        </HeaderUser>
      </ContentHeader>
    </header>
  )
}

export default Header
