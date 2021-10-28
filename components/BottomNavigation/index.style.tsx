import styled from "styled-components";
import {
  BottomNavigation as MuiBottomNavigation,
} from "@mui/material";

export const StyledBottomNavigation = styled(MuiBottomNavigation)`
  && {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
    width: 100%;
    margin-top: auto;
  }
`;