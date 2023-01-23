import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1A3C21;
    color: #FFF;
    padding: 1.5em 2em;

    >:nth-child(1){
        text-align: left;
    }

    >:nth-child(2){
        text-align: center;
    }

    >:nth-child(3){
        text-align: right;
    }
`;

export const SubContainer = styled.div`
    width: 33%;
`;

export const Row = styled.div`
    display: flex;
    img{
        margin-right: 16px;
    }
`