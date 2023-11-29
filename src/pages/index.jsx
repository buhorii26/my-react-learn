import { useState,useEffect } from "react";
import postsData from "../post.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts,  setTotalPosts] =  useState(0);
  const [externalPosts,setExternalPosts] = useState([]);
  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  /**
   * use effect menjalankan 3 fungsi berikut :
   * componentDidmount
   * componentDidupdate
   * componentWillUnmount
   */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setExternalPosts(json));
  },[]);
  return (
    <>
      <h1>homepage blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item,index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}

export default Homepage;
