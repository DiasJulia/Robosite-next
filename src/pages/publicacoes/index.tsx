import {ImagePublicacoes} from '@/assets'
import {Header} from '../../components'
import {Badge, Container, FirstImg, Row} from './styles'

const PublicacoesPage = () => {
  return (
    <Container>
        <Header title="PUBLICAÇÕES" subtitle="Conheça os artigos publicados pelo RobôCIn"/>
        <Row>
            <FirstImg src={ImagePublicacoes} alt=""></FirstImg>
            <div>
                <h1>Team Description Papers</h1>
                <p>Organizamos por ano as visões gerais dos nossos Team Description Papers, os documentos responsáveis por agrupar informações e explicações acerca dos nossos designs.  Confira o conteúdo dos artigos clicando em seus títulos!</p>
                <Badge>2022</Badge>
                <Badge>2021</Badge>
                <Badge>2020</Badge>
                <Badge>2019</Badge>
                <Badge>2018</Badge>
                <Badge>2017</Badge>
                <Badge>2016</Badge>
            </div>
        </Row>
    </Container>
  )
}

export default PublicacoesPage