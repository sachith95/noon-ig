// Next.js imports
import { useRouter } from "next/router";
// Material-UI imports
import { BottomNavigationAction, Paper } from "@mui/material";
import { Favorite, Home } from "@material-ui/icons";
// Styles
import { StyledBottomNavigation } from "./index.style";

export default function BottomNavigation() {
  const router = useRouter();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <StyledBottomNavigation
        showLabels
        onChange={(event: Object, newValue: string) => {
          router.push(`/${newValue}`);
        }}
      >
        <BottomNavigationAction label="Home" value="" icon={<Home />} />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<Favorite />}
        />
      </StyledBottomNavigation>
    </Paper>
  );
}
