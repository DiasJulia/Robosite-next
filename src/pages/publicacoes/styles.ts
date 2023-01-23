import styled from "styled-components";

export const Container = styled.div`
    margin-top: 85px;

    h1{
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 44px;
        text-transform: capitalize;

        color: #469C57;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const FirstImg = styled.img`
    filter: drop-shadow(0px 109px 44px rgba(0, 0, 0, 0.01)) drop-shadow(0px 62px 37px rgba(0, 0, 0, 0.05)) drop-shadow(0px 27px 27px rgba(0, 0, 0, 0.09)) drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
    border-radius: 24px;
`;

export const Badge = styled.div`
    background: linear-gradient(270deg, rgba(48, 48, 48, 0.6) -4.22%, rgba(0, 0, 0, 0) 50%), #469C57;
    box-shadow: 0px 17px 7px rgba(0, 0, 0, 0.01), 0px 10px 6px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    width: 111px;
    padding: 5px;
    text-align: center;
    color: #FFFFFF;

    margin-right: 22px;

    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;

    text-transform: uppercase;

    display: inline-block;
`;