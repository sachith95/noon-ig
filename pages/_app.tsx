import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Container, ThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import { Box } from "@mui/system";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  React.useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>NOON - IG</title>
      </Head>
      <ThemeProvider theme={theme}>
        <StyleThemeProvider theme={theme}>
          {isMobile ? (
            <Box>
              <Container>
                <Component {...pageProps} />
              </Container>
              <BottomNavigation />
            </Box>
          ) : (
            <Box>
              <Header />
              <Container>
                <Component {...pageProps} />
              </Container>
            </Box>
          )}
        </StyleThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
