import styled from "styled-components";
import {
  Typography,
  IconButton as MuiIconButton,
  AppBar,
} from "@material-ui/core";

export const ToolBarButton = styled.div`
  margibnleft: auto;
`;

export const HeaderTypography = styled(Typography)`
  && {
    flex: 1;
  }
`;

export const IconButton = styled(MuiIconButton)`
  padding: 10px;
`;

export const HeaderAppBar = styled(AppBar)`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
