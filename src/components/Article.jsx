import { useContext } from "react";
import { GlobalContext } from "../context";

const NewArticle = () => {
  return <span>--new post!!</span>;
};
function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        {props.isNew && <NewArticle />}
      </small>
      <div>
        <small>Ditulis oleh : {user.username}</small>
      </div>
    </>
  );
}
export default Article;
