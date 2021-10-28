import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";

export default function PostCardComment({ comments }: any) {
  return (
    <Box>
      <List>
        {comments.map(({ author, content }: any, index: number) => (
          <ListItem button key={index}>
            <ListItemAvatar>
              <Avatar alt={author.name} src={author.avatar} />
            </ListItemAvatar>
            <ListItemText primary={content} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
