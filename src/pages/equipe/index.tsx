import {Footer, Header, MemberCard, MemberCarousel} from '@/components'
import {member1, member2, member3, member4, member5, member6} from '@/images'
import {Container, SubContainer} from './styles'

const EquipePage = () => {
  return (
    <Container>
        <Header title="EQUIPE" subtitle="Conheça o time do RobôCIn!"/>
        <SubContainer>
          <h2>SMALL SIZE LEAGUE</h2>
          <hr />
          <MemberCarousel>
            <MemberCard description="Cecília Virgínia" backgroundImage={member1.src}/>
            <MemberCard description="Charles Matheus" backgroundImage={member2.src}/>
            <MemberCard description="Felipe Martins" backgroundImage={member3.src}/>
          </MemberCarousel>
          <h2>VERY SMALL SIZE SOCCER</h2>
          <hr />
          <MemberCarousel>
            <MemberCard description="Carlos Pena" backgroundImage={member4.src}/>
            <MemberCard description="Elisson Rodrigo" backgroundImage={member5.src}/>
            <MemberCard description="Heitor Rapela" backgroundImage={member6.src}/>
          </MemberCarousel>
          <h2>SIMULAÇÃO 2D</h2>
          <hr />
          <MemberCarousel>
            <MemberCard description="Carlos Pena" backgroundImage={member4.src}/>
            <MemberCard description="Elisson Rodrigo" backgroundImage={member5.src}/>
            <MemberCard description="Heitor Rapela" backgroundImage={member6.src}/>
          </MemberCarousel>
          <h2>DRONE</h2>
          <hr />
          <MemberCarousel>
            <MemberCard description="Carlos Pena" backgroundImage={member4.src}/>
            <MemberCard description="Elisson Rodrigo" backgroundImage={member5.src}/>
            <MemberCard description="Heitor Rapela" backgroundImage={member6.src}/>
          </MemberCarousel>
        </SubContainer>

        <Footer></Footer>
    </Container>
  )
}

export default EquipePage