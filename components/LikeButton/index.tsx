import React from "react";

//Material UI
import { Favorite } from "@material-ui/icons";

// Styles
import { StyledIconButton } from "./index.styles";

export default function LikeButton({
  id,
  likes,
  isLiked,
  handleClick,
}: {
  id: number;
  likes: number;
  isLiked: boolean;
  handleClick: (id: number) => void;
}) {

  return (
    <StyledIconButton
      aria-label="add to favorites"
      onClick={() => {
        handleClick(id);
      }}
      color={isLiked ? "secondary" : "default"}
    >
      <Favorite /> {`${likes} likes`}
    </StyledIconButton>
  );
}
