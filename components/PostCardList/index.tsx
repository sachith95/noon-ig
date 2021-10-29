import React, { useContext } from "react";

// Internal Components
import PostCard from "../PostCard";

// Types
import Post from "../../@types/post";

// Styles
import { StyledGrid } from "./index.style";

// Context Imports
import PostContext from "../../context/PostContext";
interface PostCardListProps {
  posts: Post[];
}

export const PostCardList = ({ posts }: PostCardListProps) => {
  const { setPosts } = useContext(PostContext);
  const handleFavoriteClick = (id: number) => {
    setPosts(
      posts.map((post: Post) =>{
        if(post.id === id && post.isLiked){
          return {...post, isLiked: false, likes: post.likes - 1}
        }else if(post.id === id && !post.isLiked){
          return {...post, isLiked: true, likes: post.likes + 1}
        }else{
          return post
        }
      }
      )
    );
  };
  return (
    <React.Fragment>
      <StyledGrid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {posts ? (
          posts.map((post: Post, i) => {
            return (
              <PostCard key={i} post={post} handleLike={handleFavoriteClick} />
            );
          })
        ) : (
          <p>No posts yet</p>
        )}
      </StyledGrid>
    </React.Fragment>
  );
};
