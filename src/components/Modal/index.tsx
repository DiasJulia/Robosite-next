import React, {useState} from 'react'
import { BackButton, Background, ModalContainer, ModalInner } from './styles';

import { Arrow1 } from '@/assets';

interface ModalProps {
    showModal: boolean;
    setShowModal: (val: boolean) => void;
    title: string,
    content: string
};

const Modal: React.FC<ModalProps> = ({showModal, setShowModal, title, content}: ModalProps) => {
    
return(
    <>
    { showModal ? (
    <Background>
        <ModalContainer>
            <BackButton onClick={() => setShowModal(false)} >
                <img src={Arrow1.src} alt="" />
            </BackButton>
            <ModalInner>
                <h2>{title}</h2>
                <p>{content}</p>
            </ModalInner>
        </ModalContainer>
    </Background>) : null
    }
</>
)}

export default Modal