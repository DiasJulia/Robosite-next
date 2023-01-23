import styled from "styled-components";
import {Background3} from "@/assets";

export const Container = styled.div`
  margin-top: 95px;
`;

export const SubContainer = styled.div`
  h2{
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #4A9E5A;
    margin-left: 4em;
  }

  hr{
    margin: 0 8em;
  }

  background: url(${Background3.src}) no-repeat bottom center;
  background-size: 100% 50%;
`;