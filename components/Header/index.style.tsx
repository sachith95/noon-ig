import styled from "styled-components";
import {
  Typography,
  IconButton as MuiIconButton,
  AppBar,
} from "@material-ui/core";

export const ToolBarButton = styled.div`
  margin-left: auto;
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
  && {
     margin: 0;
     padding: 0;
  }
`;
