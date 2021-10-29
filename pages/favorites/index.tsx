import React, { useContext, useEffect } from "react";
// Next.js imports
import type { NextPage } from "next";
// MAterial-UI imports
import { Grid, Typography } from "@material-ui/core";
// custom imports
import { PostCardList } from "../../components/PostCardList";
// type imports
import Post from "../../@types/post";
// context imports
import PostContext from "../../context/PostContext";

const Favorite: NextPage = () => {
  let { posts } = useContext(PostContext);
  const [favoritePosts, setFavoritePosts] = React.useState<Post[]>([]);

  useEffect(() => {
    if (posts) {
      setFavoritePosts(posts.filter((post: Post) => post.isLiked));
    }
  }, [posts]);

  return (
    <React.Fragment>
      {favoritePosts.length > 0 ? (
        <PostCardList posts={favoritePosts} />
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ marginTop: "200px" }}
        >
          <Typography variant="h5">No favorite posts yet</Typography>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Favorite;
