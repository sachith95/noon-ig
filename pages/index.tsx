import React from "react";
import type { NextPage } from "next";
import { PostCardList } from "../components/PostCardList";

const Home: NextPage = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <React.Fragment>
      <PostCardList posts={posts} />
    </React.Fragment>
  );
};

export default Home;
