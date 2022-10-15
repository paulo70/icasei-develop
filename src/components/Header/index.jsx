import React, { useContext } from 'react'
import { ContentHeader, HeaderTitle, HeaderSubTitle, HeaderUser, UserLogout } from './style'
import PersonIcon from '@mui/icons-material/Person'

import { UserContext } from '../../contexts/User'

const Header = () => {
  const { name, email } = useContext(UserContext)

  return (
    <header>
      <ContentHeader>
        <HeaderTitle>
          YouTube <HeaderSubTitle>Videos</HeaderSubTitle>
        </HeaderTitle>
        <HeaderUser>
          <PersonIcon /> nome: {name} || email: {email}
          <UserLogout href="">Sair</UserLogout>
        </HeaderUser>
      </ContentHeader>
    </header>
  )
}

export default Header
