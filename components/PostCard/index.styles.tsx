import styled from "styled-components";
import { Card, Typography } from "@mui/material";

export const StyledCard = styled(Card)`
  && {
    margin: 5px;
    padding: 0;
    border-radius: 0;
    border: none;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    position: relative;
  }
`;

export const CardMediaOverlay = styled.div`
   {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
  }
`;

export const StyledTypography = styled(Typography)`
    && {
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: left;
        margin-left: 5px;
        margin-bottom: 5px;
    }
`;
