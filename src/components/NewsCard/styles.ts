import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin: 64px 0;
`;

export const Picture = styled(Image)`
    border-radius: 24px;
`;

export const Content = styled.div`
    margin-left: 50px;

    display: flex;
    flex-direction: column;
    p{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 33px;
        text-align: justify;

        color: #606060;
        height: 155px;
    }

    h2{
        margin-top: 0;
        font-weight: 800;
        font-size: 32px;
        line-height: 44px;
        text-transform: uppercase;

        color: #469C57;
    }
`;

export const Button = styled.button`
    align-self: flex-end;
    background: #469C57;
    border-radius: 20px;
    padding: 10px 30px;
`;