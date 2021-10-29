import React, {useContext} from "react";
import type { NextPage } from "next";
import { PostCardList } from "../components/PostCardList";
import PostContext from "../context/PostContext";

const Home: NextPage = () => {
  const {posts}= useContext(PostContext);

  return (
    <React.Fragment>
      <PostCardList posts={posts} />
    </React.Fragment>
  );
};

export default Home;
