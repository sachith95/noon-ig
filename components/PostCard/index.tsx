import React, { useState } from "react";

// Material UI
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";

// Types
import Post from "../../@types/post";

// Internal Components
import PostCardComment from "../PostCardComment";
import LikeButton from "../LikeButton";

// Styles
import {
  StyledCard,
  CardMediaOverlay,
  StyledTypography,
  CommentButton,
  StyleTags,
  StyledCardContent,
} from "./index.styles";

export default function PostCard({
  post,
  handleLike,
}: {
  post: Post;
  handleLike: (id: number) => void;
}) {
  const { id, title, content, comments, author, isLiked, image, likes } = post;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const TextTransformer = () => {
    const hashTags = content.match(/#\w+/g);
    if (hashTags) {
      const tags = hashTags.map((hashTag) => (
        <StyleTags key={hashTag}>{hashTag}</StyleTags>
      ));
      return [content.replace(/#\w+/g, ""), ...tags];
    } else {
      return content;
    }
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar src={author.avatar}></Avatar>}
        title={
          <Typography variant="body1" color="secondary">
            {author.name}
          </Typography>
        }
      />
      <CardMedia component="img" src={image} height="200" />
      <CardMediaOverlay>
        <StyledTypography>{title}</StyledTypography>
      </CardMediaOverlay>
      <StyledCardContent>
         <LikeButton isLiked={isLiked} handleClick={handleLike} id={id} likes={likes} />
        <p>{TextTransformer()}</p>
      </StyledCardContent>
      <CardActions disableSpacing>
        <CommentButton size="small" onClick={handleExpandClick}>
          {expanded ? "Hide" : "View"} {comments.length ? comments.length : "0"}{" "}
          comments
        </CommentButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <PostCardComment comments={comments} />
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}
