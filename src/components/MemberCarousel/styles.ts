import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    overflow: hidden;
    display: flex;

`;

export const SubContainer = styled.div`
    min-width: 2000px;
    width: fit-content;
    display: flex;
`;

export const NextButton = styled.button`
    position: absolute;
    align-self: center;
    z-index: 2;
    right: 80px;
    background: #F9F9F9;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    width: 64px;
    height:64px;
    padding-right: 10px;

    :hover{
        border: none;
        background-color: #469C57;

        path{
            fill: #F9F9F9;
        }
    }

    :focus{
        background-color: #469C57;
        outline: none;
        path{
            fill: #F9F9F9;
        }
    }
`;

	