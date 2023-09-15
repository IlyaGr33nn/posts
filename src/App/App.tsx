import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./types";
import image from "../images/1.png";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setPosts(data.slice(0, 9));
    };
    getPosts();
  }, []);
  // console.log(posts);

  return (
    <>
      <h1>My Posts</h1>
      <div className="form">
        <input placeholder="title" />
        <input placeholder="post" />
        <button>Create</button>
      </div>
      <div className="wrap">
        {posts.map((post) => (
          <div key={post.id} className="postWrap">
            <h3>{post.title.slice(0, 20)}</h3>
            <img alt="post" src={image} className="image" />
            <div>{post.body.slice(0, 70)}...</div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
