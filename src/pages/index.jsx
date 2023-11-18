import { useState } from "react";
import postsData from "../post.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter(item => item.title.includes(value));
    setPosts(filteredPosts);
  };
  return (
    <>
      <h1>homepage blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
