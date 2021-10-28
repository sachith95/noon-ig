// Language: typescript
// Path: @types\post.tsx
interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: {
    id: number;
    content: string;
    author: {
      name: string;
      avatar: string;
    };
  }[];
}

export default Post;
