import React from 'react'
import Card from '../../components/Card'
import { CardWrapper, Title, Paragraph } from './style'

const DetailsList = ({ title, thumbnails, description }) => {
  return (
    <CardWrapper>
      <Card>
        {<Title>{title}</Title>}
        <img src={thumbnails} alt={thumbnails} />
        <Paragraph>{description}</Paragraph>
      </Card>
    </CardWrapper>
  )
}

export default DetailsList
