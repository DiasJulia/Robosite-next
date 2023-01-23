import React, {useEffect, useState} from 'react';
import {Container, NextButton, SubContainer} from './styles';
import Draggable, {DraggableCore} from "react-draggable";

interface ContentProps {
    children: React.ReactElement[]
}

const MemberCarousel: React.FC<ContentProps> = ({children}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    const [position, setPosition] = useState<{x: number, y: number} | undefined>(undefined)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        console.log('next');
        if(currentIndex < children.length - 1){
            setPosition({x: -(currentIndex+1)*336, y: 0});
            setCurrentIndex(currentIndex + 1);
        } else{
            setCurrentIndex(0);
            setPosition({x: 0 + 80, y: 0});
        }
    }

  return (
    <Container onClick={()=>next}>
        <NextButton onClick={()=>next()}>
        <svg width="25" height="43" viewBox="0 0 25 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2084 21.5844C24.2084 22.0814 24.1164 22.5622 23.9324 23.0269C23.7484 23.494 23.5031 23.8829 23.1964 24.1935L6.26847 41.3387C5.5938 42.022 4.73514 42.3636 3.69247 42.3636C2.64981 42.3636 1.79115 42.022 1.11649 41.3387C0.441823 40.6553 0.104492 39.7857 0.104492 38.7296C0.104492 37.6736 0.441823 36.8039 1.11649 36.1206L15.4684 21.5844L1.11649 7.0483C0.441823 6.36497 0.104492 5.49529 0.104492 4.43924C0.104492 3.3832 0.441823 2.51352 1.11649 1.8302C1.79115 1.14687 2.64981 0.805206 3.69247 0.805206C4.73514 0.805206 5.5938 1.14687 6.26847 1.8302L23.1964 18.9754C23.5644 19.3481 23.8244 19.7519 23.9765 20.1867C24.1311 20.6216 24.2084 21.0875 24.2084 21.5844Z" fill="#469C57"/>
        </svg>
        </NextButton>
        <Draggable onStart={()=>setPosition(undefined)} onStop={(e, data)=>{setCurrentIndex(Math.floor(-data.x/336))}} defaultPosition={{x:80, y:0}} axis='x' bounds={{right:80, left: -336*(length - 1)}} position={position} >
            <SubContainer >
                {children}
            </SubContainer>
        </Draggable>
    </Container>
  )
}

export default MemberCarousel