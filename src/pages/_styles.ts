import styled from 'styled-components';
import { Background1, Background2 } from '@/assets';

type DivProps = {
    width?: string;
}

type RowProps = {
    justifyContent?: string;
}

export const Container = styled.div`
    margin-top: 85px;`
;

export const FirstSection = styled.section`
    background-color: #EEEEEE;
    min-height: 364px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 2rem;

    div{
        max-width: 512px;
        margin-right: 15px;
    }

    h1{
        font-family: 'Manrope';
        font-weight: 700;
        font-size: 30px;
        line-height: 41px;
    }

    p{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        text-align: justify;
        color: #606060;
    }

    @media(max-width: 880px){
        flex-direction: column;
        text-align: center;
        justify-content: center;

        div{
            max-width: none;
        }
    }

    @media(max-width: 960px){
        div{
            margin-top: 75px;
        }
    }


    @media(min-width: 960px) and (max-width: 1200px){
        div{
            max-width: 628px;
            margin-top: 45px;
        }
    }

`;

export const RobotImg = styled.img`
    margin-right: calc(-24px - 2rem);
`

export const RoundLogoImg = styled.img`
    @media(max-width: 1200px){
        position: absolute;
        width: 90px;
        top: 115px;
    }
`

export const ThirdSection = styled.section`
    text-align: center;

    background: url(${Background1}) center no-repeat;
    background-size: auto 110%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.08);

    padding: 26px 4rem;

    h2{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 30px;
        line-height: 41px;
        color: #1A3C21;
    }

    h3{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 24px;
        line-height: 27px;
        color: #1A3C21;
    }
`

export const RowItem = styled.div`
        max-width: 360px;
        min-width: 300px;
`

export const Row = styled.div<RowProps>`
    display:flex;
    flex-direction: row;
    justify-content: ${(props) => props.justifyContent || 'space-between'};
    width: 100%;

    @media(max-width: 1200px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Div = styled.div<DivProps>`
    width: ${(props)=> props.width || 'auto'};
`

export const FourthSection = styled.section`
    text-align: center;
    padding: 56px 4rem;

    h2{
        font-weight: 700;
        font-size: 30px;
        line-height: 41px;
        text-align: center;
        text-transform: uppercase;

        color: #1A3C21;
    }

    p{
        max-width: 600px;
        font-weight: 500;
        font-size: 24px;
        line-height: 33px;
        text-align: justify;

        color: #606060;
    }
`

export const RobotImg2 = styled.img`
    margin-left: 2rem;
    width: 45%;

    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2)) drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.08));
`

export const FifthSection = styled.section`
    text-align: center;
    padding: 56px 4rem;
    background: radial-gradient(82.29% 124.05% at 25.07% 142.13%, rgba(84, 236, 126, 0.2) 21.26%, rgba(93, 233, 132, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #F3F3F3;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.08);

    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 41px;
        text-align: center;
        text-transform: uppercase;
        color: #1A3C21;
    }
`

export const VisionCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    max-width: 350px;
    margin: 50px;

    padding: 2em;

    h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 27px;
        text-transform: uppercase;
        color: #1A3C21;
    }

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 27px;
        text-align: center;
        color: #606060;
    }

    img{
        margin: 25px 0;
    }
`

export const SixthSecion = styled.section`
    text-align: center;
    padding: 56px 4rem;
    padding-bottom: 150px;
    background: url(${Background2.src}) no-repeat center bottom;
    background-size: 100% 90%;

    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 55%;
    }
`;

export const MoreButton = styled.button`
    background: #469C57;
    border-radius: 20px;
    border: none;
`

export const Badge = styled.div`
    background: linear-gradient(276.57deg, rgba(70, 156, 87, 0.8) 15.82%, rgba(0, 0, 0, 0) 147.73%), #606060;
    border-radius: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    padding: 8px;
    width: 180px;
    color: #FFFFFF;
    margin: 0 60px;
`