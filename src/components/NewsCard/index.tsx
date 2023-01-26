import {StaticImageData} from 'next/image'
import React from 'react'
import {Button, Container, Content, Picture} from './styles'

type NewsProps = {
    title: string,
    content: string,
    image: StaticImageData
}

const NewsCard: React.FC<NewsProps> = ({title, content, image}) => {
  return (
    <Container>
        <Picture src={image} alt="imagem da postagem"></Picture>
        <Content>
            <h2>{title}</h2>
            <p>{content}</p>
            <br />
            <Button>Saiba Mais</Button>
        </Content>
        <hr />
    </Container>
  )
}

export default NewsCard