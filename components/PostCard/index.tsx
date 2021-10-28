import React from "react";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import Post from "../../@types/post";
import PostCardComment from "../PostCardComment";
import { StyledCard, CardMediaOverlay, StyledTypography } from "./index.styles";
import { Favorite } from "@material-ui/icons";

export default function PostCard({
  id,
  title,
  author,
  comments,
  content,
  image,
  likes,
}: Post) {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setLiked(!liked);
  };

  return (
    <StyledCard>
      <CardHeader avatar={ <Avatar src={author.avatar}></Avatar>} title={author.name} />
      <CardMedia component="img" src={image} height="200" />
      <CardMediaOverlay>
        <StyledTypography>{title}</StyledTypography>
      </CardMediaOverlay>
      <CardContent>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            handleFavoriteClick();
          }}
        >
          <Favorite />
        </IconButton>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={handleExpandClick}>
          View {comments.length ? comments.length : "0"} comments
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <PostCardComment comments={comments} />
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}
