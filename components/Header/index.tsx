import * as React from "react";
import { useRouter } from "next/router";

import { Toolbar } from "@mui/material";

import { Favorite, Home } from "@material-ui/icons";

import {
  ToolBarButton,
  HeaderTypography,
  IconButton,
  HeaderAppBar,
} from "./index.style";

export default function Header() {
  const router = useRouter();

  const handleClick = React.useCallback(
    (value) => {
      router.push(`/${value}`)
    },
    [router]
  );

  return (
    <>
      <HeaderAppBar position="static">
        <Toolbar>
          <HeaderTypography variant="h6" style={{ flex: 1 }}>
            Noon
          </HeaderTypography>
          <ToolBarButton>
            <IconButton
              value=""
              edge="end"
              color="inherit"
              aria-label="home"
              onClick={() => handleClick("")}
            >
              <Home />
            </IconButton>
            <IconButton
              value="favorites"
              edge="end"
              color="inherit"
              aria-label="favorite"
              onClick={() => handleClick("favorites")}
            >
              <Favorite />
            </IconButton>
          </ToolBarButton>
        </Toolbar>
      </HeaderAppBar>
    </>
  );
}
