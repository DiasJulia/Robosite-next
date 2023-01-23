import styled from "styled-components";

type SlideProps = {
    backgroundImage: string;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: calc(100% + 50px);
    margin-top: 48px;
`;

export const SliderStyled = styled.div`
    display: flex;
    width: calc(100% + 50px);
    margin-left: -25px;
    margin-right: -25px;
    .center{
        transform: scale(1.15);
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.08);

        div{
            background: rgba(0, 0, 0, 0.2);
        }
    }
`;

export const Slide = styled.div<SlideProps>`
    border-radius: 24px;
    background: url(${(props)=> props.backgroundImage}) no-repeat center;
    background-size: cover;
    height: 315px;
    width: 50%;
    transition: background 0.2s ease;
`

export const Filter = styled.div`
    background: rgba(227, 227, 227, 0.7);
    height: 100%;
    width: 100%;
    border-radius: 24px;
`

export const Content = styled.div`
    z-index: 2;
    position: absolute;
    height: 315px;
    width: 40%;
    margin: 0 auto;
    color: #FFFFFF;
    text-align: center;

    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;

    div{
        align-self: flex-end;
    }

    h3{
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 44px;
        color: #EBEBEB;
    }

    p{
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
    }
`
export const Arrow = styled.img`
    cursor: pointer;
    :hover{
        transform: scale(1.05);
    }
`