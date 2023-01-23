import {useState} from 'react'
import { Navbar, Carousel, Footer, Modal } from '@/components';
import Content from '@/data/content.json';

import { Container, FirstSection, ThirdSection, RoundLogoImg, RobotImg, RobotImg2, Row, FourthSection, Div, RowItem, FifthSection, VisionCard, SixthSecion, MoreButton, Badge } from './_styles';
import { RoundLogo, RobotPhotos, Trophy, MagGlasses, Chip, Trophy2, Upload, 
  People, 
  MissaoIcon, 
  VisaoIcon,
  ValoresIcon, 
  LogoHSBS,
  LogoCin,
  LogoMoura,
  LogoVeroli,
  LogoMicrosoft,
  LogoCesar } from '@/assets';

const HomePage = () => {

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const SaibaMais = (index: number) => {
      setTitle(Content[index].title);
      setContent(Content[index].content);
      setShowModal(prev => !prev);
  };

  return(
  <div>
    <Modal showModal={showModal} setShowModal={setShowModal} title={title} content={content}></Modal>
  <Container>
    <FirstSection>
      <RoundLogoImg src={ RoundLogo.src } alt="" />
      <div>
        <h1>Pessoas que desenvolvem...</h1>
        <p>A partir da realização de parcerias, somos uma ferramenta de formação em robótica que envolve uma pluralidade de áreas do conhecimento, principalmente engenharia de hardware e software, gerando oportunidades de trabalho e pesquisa nessa área.</p>
      </div>
      <RobotImg src={ RobotPhotos.src } alt="" />
    </FirstSection>
    <Carousel/>
    <ThirdSection>
      <h2>O que fazemos</h2>
      <Row>
        <RowItem>
          <img src={ Trophy.src } alt="Desenho de Troféu" />
          <h3>Competições</h3>
          <p>Nós participamos de diversas competições, como a RoboCup, a IRONCup e a LARC.</p>
          <MoreButton onClick={() => {SaibaMais(0)}}>Saiba mais</MoreButton>
        </RowItem>
        <RowItem>
          <img src={ MagGlasses.src } alt="Desenho de Lupa" />
          <h3>Pesquisa</h3>
          <p>Professores e estudantes pesquisando dentro dos problemas da robótica.</p>
          <MoreButton onClick={() => {SaibaMais(1)}}>Saiba mais</MoreButton>
        </RowItem>
        <RowItem>
          <img src={ Chip.src } alt="Desenho de Processador" />
          <h3>Desenvolvimento</h3>
          <p>Nós projetamos e desenvolvemos a eletrônica, a mecânica e a inteligência dos robôs.</p>
          <MoreButton onClick={() => {SaibaMais(2)}}>Saiba mais</MoreButton>
        </RowItem>
      </Row>
    </ThirdSection>
    <FourthSection>
      <h2>Quem somos nós</h2>
      <Row>
        <p>RobôCIn é um grupo de pesquisa e desenvolvimento do Centro de Informática da UFPE, que utiliza a robótica para desenvolver soluções. O grupo foi criado em 2015 por 12 estudantes de Engenharia da Computação com ajuda de dois professores. Edna Barros e Hansenclever Bassani. Desenvolver soluções utilizando Inteligência Artificial, Visão Computacional, Mecânica e Eletrônica aplicados na robótica.</p>
        <RobotImg2 src={ RobotPhotos.src } alt="" />
      </Row>
      <br />
      <Row justifyContent="center">
        <div>
          <img src={ Trophy2.src } alt="Desenho de troféu" />
          <h4>Premiações</h4>
          <Badge>32</Badge>
        </div>
        <div>
          <img src={ Upload.src } alt="Desenho de Upload" />
          <h4>Artigos publicados</h4>
          <Badge>28</Badge>
        </div>
        <div>
          <img src={ People.src } alt="Desenho de Upload" />
          <h4>Colaboradores</h4>
          <Badge>89</Badge>
        </div>
      </Row>
    </FourthSection>
    <FifthSection>
      <h2>Nossas convicções</h2>
      <Row>
        <VisionCard>
          <h3>Missão</h3>
          <img src={ MissaoIcon.src } alt="" />
          <p>Bom dia, esses são as coisas dessa caixa de texto. Ela possui um ótimo espaço para escrever.</p>
        </VisionCard>
        <VisionCard>
          <h3>Visão</h3>
          <img src={ VisaoIcon.src } alt="" />
          <p>Bom dia, esses são as coisas dessa caixa de texto. Ela possui um ótimo espaço para escrever.</p>
        </VisionCard>
        <VisionCard>
          <h3>Valores</h3>
          <img src={ ValoresIcon.src } alt="" />
          <p>Bom dia, esses são as coisas dessa caixa de texto. Ela possui um ótimo espaço para escrever.</p>
        </VisionCard>
      </Row>
    </FifthSection>
    <SixthSecion>
      <h2>Nossos patrocinadores</h2>
      <p>Você pode ser o próximo! Nos ajude a crescer mais ainda e faça parte do nosso time, manda um Email aí!</p>
      <h3>robocin@cin.ufpe.br</h3>
      <Row>
        <img src={LogoCesar.src} alt="" />
        <img src={LogoMicrosoft.src} alt="" />
        <img src={LogoVeroli.src} alt="" />
        <img src={LogoCin.src} alt="" />
        <img src={LogoMoura.src} alt="" />
        <img src={LogoHSBS.src} alt="" />
      </Row>
    </SixthSecion>
    <Footer/>
  </Container>
  </div>
);
}

export default HomePage