import {PostImg1, PostImg2} from "@/assets"
import {Footer, Header, NewsCard} from "@/components"
import {Container, Content} from "./styles"

const Blog = () => {
  return (
    <Container>
      <Header title="BLOG" subtitle="Fique por dentro das últimas novidades do RobôCIn!"></Header>
      <Content>
        <NewsCard image={PostImg1} title="SELETIVAS ABERTAS!" content="Você sabia que as seletivas do RobôCIn estão rolando nesse momento?  Temos 5 áreas de atuação, sendo elas: comunicação, mecânica, eletrônica, embarcados e software. Escolha em que você deseja se envolver, estude sobre o tópico, desenvolva um projeto e mostre pra gente! Se interessou? Vem descobrir mais sobre!"></NewsCard>
        <hr />
        <NewsCard image={PostImg2} title="TÍTULO DA POSTAGEM" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."></NewsCard>
        <hr />
        <NewsCard image={PostImg2} title="TÍTULO DA POSTAGEM" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."></NewsCard>
      </Content>
      <Footer></Footer>
    </Container>
  )
}

export default Blog