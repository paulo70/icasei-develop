import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../../components/Card'
import { CardWrapper, Title, Paragraph } from './style'

const HomeList = ({ id, title, thumbnails, description }) => {
  const navigate = useNavigate()

  const handleDetails = (id) => {
    navigate({
      pathname: `/details/${id}`
    })
  }

  return (
    <>
      <CardWrapper>
        <Card>
          { <Title>{ title }</Title> }
          <img src={ thumbnails } alt={ thumbnails } />
          <Paragraph>{ description }</Paragraph>
        </Card>
        <button type='submit' onClick={ () => handleDetails(id) }>ver detalhes</button>
      </CardWrapper>
    </>
  )
}

export default HomeList
