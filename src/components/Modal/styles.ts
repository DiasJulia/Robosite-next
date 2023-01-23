import styled from "styled-components";

import { ModalBackground } from "../../assets";

export const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(172, 172, 172, 0.7);
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    background-color: #FFF;
    border-radius: 24px;
`

export const ModalInner = styled.div`
    min-height:300px;
    text-align: center;
    padding: 4em 4em;
    min-width: 50vw;
    border-radius: 24px;
    background: url(${ModalBackground}) center bottom no-repeat;
    background-size: 100% auto;

    h2{
        text-transform: uppercase;
        color: #1A3C21;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 27px;
    }

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        text-align: justify;
        color: #1A3C21;
        max-width: 490px;
        margin: auto;
    }
`

export const BackButton = styled.button`
    background: #469C57;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 30px;

    position: absolute;

    img{
        height: 25px;
    }
`;