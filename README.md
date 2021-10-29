
# N-IG

This is simple Instagram like mobile friendly UI design using Next js


## Tech Stack

**Client:** React, Material-UI, Styled-Components

**Server:** Node, Next JS- API Routes

**DB:** Dummy data file on ./DummyData
## Features

- View All Posts
- View favorite Posts
- Add / Remove posts from favorite
- View Comments
- Mobile Friendly


## Getting Started

Run following command to Setup

```bash
  gitclone <giturl>
  cd noon-ig
  npm i
  # or
  yarn install
```

To Start Development server Run
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## API Reference

#### Get all posts
[http://localhost:3000/api/posts](http://localhost:3000/api/posts)

```http
  GET /api/posts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | none  |




## Structure
    .
    ├── @types                  # This contains the typing for the application
    ├── components              # This contains the common Custom styled components for the application
    │   ├── component Name      # This contained Custom component files
    │   │   ├── index.tsx           #  Component logic
    │   │   ├── index.style.tsx     #  Component Styles
    │                           
    ├── context                 # Custom define context api hooks
    ├── DummyData               # dummy data for backend apis
    ├── pages                   # This contained the all the routes in application
    ├── public                  # statics files
    ├── styles                  # Common styles and application theme
    └── README.md

## Authors

- [@Sachith Silva](https://www.github.com/sachith95)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
