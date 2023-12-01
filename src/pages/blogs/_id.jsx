import { useLoaderData } from "react-router-dom";

function idPost() {
  const post = useLoaderData();
  return (
    <>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}

export default idPost;
