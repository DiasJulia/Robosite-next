import React, {useState} from 'react'

import { Container, SliderStyled, Slide, Filter, Content, Arrow } from './styles';

import { SlidePic1, SlidePic2, SlidePic3, Arrow1, Arrow2 } from '../../assets';

const Carousel: React.FC = () => {
  const [slides, setSlides] = useState<string[]>([SlidePic1.src, SlidePic2.src, SlidePic3.src]);
  const [description, setDescription] = useState<string[]>(['Seletivas RobocIn 2023!', 'Campeão latino-americano em SSL', 'Campeão mundial em SSL'])

  const [slideState, setSlideState] = useState<number>(2);

  const moveSlide = (next: boolean) => {
    if(next){
      const newState = slideState === 2? 0: slideState + 1;
      setSlideState(newState);
    } else {
      const newState = slideState? slideState - 1 : 2;
      setSlideState(newState);
    }
  }
  

  return (
    <Container>
        <Content>
            <Arrow src={Arrow1.src} alt="Seta para a esquerda" onClick={() => moveSlide(false)} />
            <div>
              <h3>{description[slideState]}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Arrow src={Arrow2.src} alt="Seta para a direita" onClick={() => moveSlide(true)} />
        </Content>
        <SliderStyled>
          <Slide backgroundImage={ slides[slideState? slideState - 1 : 2] }>
            <Filter>
            </Filter>
          </Slide>
          <Slide className='center' backgroundImage={ slides[slideState] }>
            <Filter>
            </Filter>
          </Slide>
          <Slide backgroundImage={ slides[slideState===2? 0 : slideState+1] }>
            <Filter>
            </Filter>
          </Slide>
        </SliderStyled>
    </Container>
    )
  }

export default Carousel;