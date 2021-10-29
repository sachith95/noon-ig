import styled from "styled-components";
import { Card, Typography, Button, CardContent, IconButton } from "@mui/material";

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
    top: 240px;
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

export const CommentButton = styled(Button)`
  && {
    background-color: #fff;
    color: grey;
    font-size: 0.7rem;
    border: none;
    border-radius: 0;
    padding: 0;
    margin: 0;
    text-transform: none;
  }
`;

export const StyleTags = styled.a`
  && {
    color: blue;
    text-decoration: none;
    margin-left: 2px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    padding: 0;
    padding-left: 5px;
    padding-top: 5px;
    margin: 0;
  }
`;

export const StyledIconButton = styled(IconButton)`
  && {
    left: 0;
    padding: 0;
    margin-left: 0;
    margin-bottom: 5px;
    border-radius: 0;
    border: none;
    font-size: 1rem;
  }
`;