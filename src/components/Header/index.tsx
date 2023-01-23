import React from 'react'
import {FirstSection} from './styles'

interface HeaderProps{
    title: string,
    subtitle: string
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <FirstSection>
            <h1>{title}</h1>
            <p>{subtitle}</p>
    </FirstSection>
  )
}

export default Header;
