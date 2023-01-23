import styled from "styled-components";

type CardProps = {
    backgroundImage: string
}

export const Card = styled.div<CardProps>`
    width: 300px;
    height: 300px;
    border-radius: 24px;
    background-image: url(${(props) => props.backgroundImage});
    margin: 28px;
    display: flex;
    justify-content: center;
    align-items: end;

    h4{
        opacity: 0;
        background-color: #469C57;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 39px;
        width: 100%;
        color: #FFFFFF;
        margin-bottom: 0;
        border-radius: 0px 0px 24px 24px;
        padding-left: 16px;
        transition: opacity 0.5s ease;
    }

    :hover{
        h4{
            opacity: 1;
        }
    }
`;