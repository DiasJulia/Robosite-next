import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 85px;
`;

export const LogoImg = styled.img`
    margin-left: 2rem;
    height: 44px;
    @media(max-width: 880px){
    z-index: 15;
    }
`

export const Nav = styled.nav`
    ul{
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin-right: 2rem;
    }

    li{
        margin-right: 32px;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        text-transform: uppercase;
    }

    a{
        color: #303030;
    }

    a:hover{
        color: #469C57;
        text-decoration: none;
    }

    .active a{
        color: #469C57;
    }
    @media(max-width: 815px){
        position: fixed;
        z-index: 8;
        width: 100%;
        top: 0;
        left: 0;
        display: none;
        padding: 1em;
        text-align: right;

        ul{
            flex-direction: column;
        }
    }
`;

export const MenuButton = styled.label`
    display: none;
    @media(max-width: 815px){
        display: inline;
    }
    cursor: pointer;
    z-index: 15;
`;

export const MenuChecker = styled.input`
    &:checked ~ ${Nav}{
        display: block;
        width: 100%;
        background: #ffffff;
    }

    &:checked ~ ${MenuButton}{
        div:first-of-type{
            transform: rotate(45deg);
            position: absolute;
        }

        div:nth-of-type(2){
            transform: rotate(-45deg);
        }
        div:nth-of-type(3){
            transition: opacity 0.5s ease-in-out;
            opacity: 0;
        }
    }

    visibility: hidden;
`;

export const Line = styled.div`
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background-color: #469C57;
    margin: 4px;
    transition: transform 0.5s linear;
`;

export const CloseButton = styled.label`
    display: none;
    visibility: hidden;
    margin-right: 4px;

    cursor: pointer;

    @media(max-width: 768px){
        display: inline-flex;
        visibility: visible;
        justify-content: center;
        align-items: center;
    }

    div:first-of-type{
        transform: rotate(45deg);
        position: absolute;
    }

    div:nth-of-type(2){
        transform: rotate(-45deg);
    }
`;