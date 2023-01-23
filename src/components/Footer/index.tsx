import React from 'react'
import { Container, SubContainer, Row } from './styles';

import { LogoHorizontal, LogoFacebook, LogoInstagram, LogoYouTube, LogoLinkedIn, LogoGithub } from '../../assets';

const Footer: React.FC = () => (
    <Container>
        <SubContainer>
            <h4>Nosso Contato</h4>
            <p>robocin@cin.ufpe.br</p>
            <Row>
            <img src={LogoFacebook.src} alt="" />
            <img src={LogoInstagram.src} alt="" />
            <img src={LogoYouTube.src} alt="" />
            <img src={LogoLinkedIn.src} alt="" />
            <img src={LogoGithub.src} alt="" />
            </Row>
        </SubContainer>
        <SubContainer>
            <img src={LogoHorizontal} alt="" />
        </SubContainer>
        <SubContainer>
            <h4>Onde estamos</h4>
            <p>Av. Jorn. Aníbal Fernandes, s/n <br></br> - Cidade Universitária, Recife - PE, 50740-560</p>
        </SubContainer>
    </Container>
)

export default Footer