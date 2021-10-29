import {useCallback} from "react";
// Next imports
import { useRouter } from "next/router";

// Material-UI imports 
import { Toolbar } from "@mui/material";
import { Favorite, Home } from "@material-ui/icons";

// Styles
import {
  ToolBarButton,
  HeaderTypography,
  IconButton,
  HeaderAppBar,
} from "./index.style";

export default function Header() {
  const router = useRouter();

  const handleClick = useCallback(
    (value) => {
      router.push(`/${value}`)
    },
    [router]
  );

  return (
    <>
      <HeaderAppBar position="fixed">
        <Toolbar>
          <HeaderTypography variant="h6" style={{ flex: 1 }}>
            Noon - IG
          </HeaderTypography>
          <ToolBarButton>
            <IconButton
              value=""
              edge="end"
              color="inherit"
              aria-label="home"
              onClick={() => handleClick("")}
            >
              <Home /> Home
            </IconButton>
            <IconButton
              value="favorites"
              edge="end"
              color="inherit"
              aria-label="favorite"
              onClick={() => handleClick("favorites")}
            >
              <Favorite/> Liked
            </IconButton>
          </ToolBarButton>
        </Toolbar>
      </HeaderAppBar>
    </>
  );
}
