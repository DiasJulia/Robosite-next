import Link from "next/link";
import styled from "styled-components";

type RowProps = {
  justifyContent?: string;
};

type ImgProps = {
  BackgroundImg: string;
};

type ContentProps = {
  width?: string;
};

export const Container = styled.div`
  margin-top: 95px;
`;

export const SubContainer = styled.div`
  margin: 4em;
`;

export const FirstSection = styled.section`
  text-align: center;
  box-shadow: 0px 159px 159px rgba(0, 0, 0, 0.045),
    0px 40px 87px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
  min-height: 230px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #1a3c21;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;

    color: #606060;
    margin: 0 4em;
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  width: 100%;
`;

export const BadgeContainer = styled.a`
  margin-top: -70px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(1) {
    justify-content: flex-start;
    height: 160px;
    div {
      margin-left: 30px;
    }
  }

  &:nth-of-type(4) {
    justify-content: flex-end;
    height: 160px;
    div {
      margin-right: 30px;
    }
  }

  img {
    position: absolute;
    align-self: flex-end;
  }
`;

export const Badge = styled.div`
  background: linear-gradient(
      281.32deg,
      rgba(48, 48, 48, 0.6) -9.93%,
      rgba(0, 0, 0, 0) 40.16%
    ),
    #469c57;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;

  width: 160px;
  min-height: 75px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 18px;

  margin: 0 60px;

  color: #ffffff;

  z-index: 2;
`;

export const Details = styled.details`
  box-shadow: 0px 20px 40px -6px rgba(0, 0, 0, 0.2),
    0px 7px 10px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 24px 24px;

  summary {
    background: linear-gradient(
        283.39deg,
        rgba(48, 48, 48, 0.6) 9.51%,
        rgba(0, 0, 0, 0) 50%
      ),
      #469c57;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-transform: capitalize;
    color: #ffffff;

    padding: 7px 14px;
    cursor: pointer;
  }
`;

export const TableLine = styled.div`
  min-height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-size: 20px;
  line-height: 27px;

  color: #606060;

  p {
    width: 16.6%;
    text-align: center;
  }

  &:nth-of-type(1) {
    font-style: normal;
    font-weight: 800;
    text-transform: capitalize;
  }

  &:nth-of-type(odd) {
    background: #f4f4f4;
  }

  &:nth-of-type(even) {
    background: #fff;
  }

  &:last-child {
    border-radius: 0 0 24px 24px;
  }
`;

export const CategoriaContainer = styled.div<ContentProps>`
  width: ${(props) => props.width || "50%"};
  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    text-transform: uppercase;

    color: #469c57;
    display: inline;
    margin-left: 12px;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-transform: uppercase;
    display: inline;
    color: #469c57;
    margin-left: 20px;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */

    text-align: center;

    color: #459b56;

    display: inline;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    text-align: justify;
    color: #606060;
  }
`;

export const CategoriaImg = styled.div<ImgProps>`
  filter: drop-shadow(-15px 40px 17px rgba(0, 0, 0, 0.01))
    drop-shadow(-9px 22px 14px rgba(0, 0, 0, 0.05))
    drop-shadow(-4px 10px 11px rgba(0, 0, 0, 0.09))
    drop-shadow(-1px 2px 6px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
  background: url(${(props) => props.BackgroundImg}) no-repeat center;
  background-size: cover;
  border-radius: 24px 0px 24px 24px;
  width: 45%;
  margin-bottom: 40px;
  padding: 12% 0;
`;

export const CrossedText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  h4 {
    position: absolute;
    background-color: #f9f9f9;
    padding: 10px;
  }
`;

export const Line = styled.hr`
  width: 100%;
`;
