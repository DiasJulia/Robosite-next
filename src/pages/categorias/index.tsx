import Image from 'next/image'
import {Arrow3, Categoria2D, CategoriaSSL, CategoriaVSS, Pontos} from '../../assets'
import {Footer, Header} from '../../components'
import {Badge, BadgeContainer, CategoriaContainer, CategoriaImg, Container, CrossedText, Details, FirstSection, Line, Row, SubContainer, TableLine} from './styles'


const CategoriasPage = () => {
  return (
    <Container>
        <Header title="CATEGORIAS" subtitle="Nossas sub-equipes cooperam para administrar, desenvolver e competir em várias categorias diferentes, como SSL, VSSS, Simulação 2D e Drone."/>
        <Row justifyContent='center'>
            <BadgeContainer href="#SSL">
                <Image src={Pontos} alt="" />
                <Badge>Small size league</Badge>
            </BadgeContainer>
            <BadgeContainer href="#VSSS">
                <Image src={Pontos} alt="" />
                <Badge>very Small size league</Badge>
            </BadgeContainer>
            <BadgeContainer href="#2D">
                <Image src={Pontos} alt="" />
                <Badge>Simulação 2d</Badge>
            </BadgeContainer>
            <BadgeContainer href="#">
                <Image src={Pontos} alt="" />
                <Badge>drone</Badge>
            </BadgeContainer>
        </Row>
        
        <SubContainer id="SSL">
        <hr />
        <br />
            <Row>
                <CategoriaContainer>
                    <Image src={Arrow3} alt="Seta" /> <h2>Small Size League</h2> <h3>RoboCup | LARC</h3>
                    <p>Small Size League (SSL) é uma competição que requer o desenvolvimento de várias áreas. Nós desenvolvemos o modelo mecânico, os sistemas eletrônicos e de comunicação e a inteligência artifical dos robôs. Um jogo de SSL ocorre entre duas equipes de seis robôs cada. Os robôs tem dimensões limitadas, o robô deve caber dentro de um círculo de 180 mm de diâmetro e não deve ter mais de 15 cm. Todos os objetos no campo são identificados e normalizados pelos sistema de visão que processa os dados proveniente pelas 4 cameras.</p>
                </CategoriaContainer>
                <CategoriaImg BackgroundImg={CategoriaSSL.src}></CategoriaImg>
            </Row>
            <Details>
                <summary>SSL - Resultados</summary>
                <TableLine>
                <p>COMPETIÇÃO</p>
                <p>2022</p>
                <p>2021</p>
                <p>2020</p>
                <p>2019</p>
                <p>2018</p>
                </TableLine>
                <TableLine>
                    <p>RoboCup</p>
                    <p>10º</p>
                    <p>7º</p>
                    <p>Adiado</p>
                    <p>9º</p>
                    <p>N/A</p>
                </TableLine>
                <TableLine>
                    <p>LARC</p>
                    <p></p>
                    <p>1º</p>
                    <p>3º</p>
                    <p>2º</p>
                    <p>4º</p>
                </TableLine>
            </Details>
        </SubContainer>
        
        <SubContainer id='VSSS'>
        <hr />
        <br />
            <Row>
                <CategoriaContainer>
                    <img src={Arrow3.src} alt="Seta" /> <h2>VERY Small Size League</h2> <h3> LARC | IronCup</h3>
                    <p>Very Small Size Soccer (VSSS) é uma competição que requer desenvolvimento nas principais áreas do RobôCIn, visão computacional para detectar informações sobre a situação do jogo; inteligência artificial para planejar todos os movimentos dos robôs, para que a equipe possa marcar gols e se defender dos adversários; e robótica que envolve eletrônica e mecânica para criar agentes que precisam se mover perfeitamente em campo.</p>
                    <CrossedText>
                        <h4>Abordagens adotadas por nós</h4>
                        <Line></Line>
                    </CrossedText>
                </CategoriaContainer>
                <CategoriaImg BackgroundImg={CategoriaVSS.src}></CategoriaImg>
            </Row>
            <Row>
                <CategoriaContainer>
                    <img src={Arrow3.src} alt="Seta" /> <h4>Abordagem com Deep Learning</h4>
                    <p>Nessa abordagem nós treinamos os agentes usando aprendizado por reforço, ou seja, damos uma recompensa para ações boas e ruins dos agentes, ele aprende a maximizar a recompensa e com isso as melhores ações para cada situação.</p>
                </CategoriaContainer>
                <CategoriaContainer width="45%">
                    <img src={Arrow3.src} alt="Seta" /> <h4>Abordagem Determinística</h4>
                    <p>Nessa abordagem nós usamos algoritmos determinísticos para decidir as ações dos nossos robôs, ou seja, programamos a estratégia e decisões que nossos jogadores fazem.</p>
                </CategoriaContainer>
            </Row>
            <Details>
                <summary>VSSL - Resultados</summary>
                <TableLine>
                <p>COMPETIÇÃO</p>
                <p>2021</p>
                <p>2020</p>
                <p>2019</p>
                <p>2018</p>
                <p>2017</p>
                <p>2016</p>
                </TableLine>
                <TableLine>
                    <p>LARC</p>
                    <p>1° 3v3 RL <br/>2° 5V5 DET</p>
                    <p>4° DET<br/>5° RL</p>
                    <p>4° DET<br/>5° RL</p>
                    <p>3°</p>
                    <p>5°</p>
                    <p>16°</p>
                </TableLine>
                <TableLine>
                    <p>IRONCup</p>
                    <p>1º</p>
                    <p>3° RL<br/>5° DET</p>
                    <p>3° RL</p>
                    <p>3°</p>
                    <p>N/A</p>
                    <p>N/A</p>
                </TableLine>
            </Details>
        </SubContainer>

        <SubContainer id="2D">
        <hr />
        <br />
            <Row>
                <CategoriaContainer>
                    <img src={Arrow3.src} alt="Seta" /> <h2>Simulação 2d</h2> <h3>RoboCup | LARC | IronCup</h3>
                    <p>Na Simulação 2D duas equipes de onze agentes autônomos jogam futebol em um estádio de futebol virtual bidimensional representado por um servidor central, chamado SoccerServer. Este servidor sabe tudo sobre o jogo, ou seja, a posição atual de todos os jogadores e a bola, a física e assim por diante. O jogo conta ainda com a comunicação entre o servidor e cada agente. Por um lado, cada jogador recebe uma entrada relativa e ruidosa de seus sensores virtuais (visuais, acústicos e físicos) e, por outro lado, pode executar alguns comandos básicos (como correr, girar ou chutar) para influenciar seu ambiente.</p>
                </CategoriaContainer>
                <CategoriaImg BackgroundImg={Categoria2D.src}></CategoriaImg>
            </Row>
            <Details>
                <summary>Simulação 2d - Resultados</summary>
                <TableLine>
                <p>COMPETIÇÃO</p>
                <p>2022</p>
                <p>2021</p>
                <p>2020</p>
                <p>2019</p>
                <p>2018</p>
                </TableLine>
                <TableLine>
                    <p>RoboCup</p>
                    <p>10º</p>
                    <p>7º</p>
                    <p>Adiado</p>
                    <p>9º</p>
                    <p>N/A</p>
                </TableLine>
                <TableLine>
                    <p>LARC</p>
                    <p></p>
                    <p>1º</p>
                    <p>3º</p>
                    <p>2º</p>
                    <p>4º</p>
                </TableLine>
            </Details>
        </SubContainer>
        <Footer/>
    </Container>
  )
}

export default CategoriasPage