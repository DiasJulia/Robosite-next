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
`