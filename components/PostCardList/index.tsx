import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "../PostCard";
import Post from "../../@types/post";

import { StyledGrid } from "./index.style";
interface PostCardListProps {
  posts: Post[];
}

export const PostCardList = ({ posts }: PostCardListProps) => {
  return (
    <React.Fragment>
      <StyledGrid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {posts.map((post: Post, i) => {
          return <PostCard key={i} {...post} />;
        })}
      </StyledGrid>
    </React.Fragment>
  );
};
