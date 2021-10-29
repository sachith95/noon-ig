import React, { useContext, useEffect } from "react";
// Next.js imports
import type { NextPage } from "next";
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
      {favoritePosts ? (
        <PostCardList posts={favoritePosts} />
      ) : (
        <p> No favorite posts yet. </p>
      )}
    </React.Fragment>
  );
};

export default Favorite;
