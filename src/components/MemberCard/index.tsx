import React from 'react'
import {Card} from './styles'

type CardProps = {
    description: string,
    backgroundImage: string
}

const MemberCard: React.FC<CardProps> = ({description, backgroundImage}) => {
  return (
    <Card backgroundImage={backgroundImage}>
      <h4>{description}</h4>
    </Card>
  )
}

export default MemberCard