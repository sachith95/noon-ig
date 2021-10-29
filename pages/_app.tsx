import React from "react";
// Next.js imports
import type { AppProps } from "next/app";
import Head from "next/head";
// Material-UI imports
import { ThemeProvider } from "@material-ui/core";
// Styles imports
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import theme from "../styles/theme";
// Custom components imports
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
// Context imports
import PostContext from "../context/PostContext";
// types
import Post from "../@types/post";

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

  const [posts, setPosts] = React.useState([] as Post[]);
  React.useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>NOON - IG</title>
      </Head>
      <ThemeProvider theme={theme}>
        <StyleThemeProvider theme={theme}>
          <PostContext.Provider value={{posts, setPosts}}>
            {isMobile ? (
              <>
                <Component {...pageProps} />
                <BottomNavigation />
              </>
            ) : (
              <>
                <Header />
                <Component {...pageProps} />
              </>
            )}
          </PostContext.Provider>
        </StyleThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
