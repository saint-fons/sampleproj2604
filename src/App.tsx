import React from 'react';
import PostsList from "./components/PostsList"


const posts: IPosts[] = [
  {userId: "1", id: "1", title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
]


const App = () => {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
};

export default App;
