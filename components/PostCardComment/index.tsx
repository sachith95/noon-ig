// Material UI components
import { ListItemText, ListItemAvatar, Avatar } from "@mui/material";

// Styles
import { StyledListItem, StyledList } from "./index.style";

export default function PostCardComment({ comments }: any) {
  return (
    <StyledList>
      {comments.map(({ author, content }: any, index: number) => (
        <StyledListItem key={index}>
          <ListItemAvatar>
            <Avatar src={author.avatar} />
          </ListItemAvatar>
          <ListItemText primary={author.name} secondary={content} />
        </StyledListItem>
      ))}
    </StyledList>
  );
}
