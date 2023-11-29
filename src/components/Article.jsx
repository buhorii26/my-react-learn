const NewArticle = () => {
  return <span>--new post!!</span>
}
function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        {props.isNew && <NewArticle />}
              </small>
    </>
  );
}
export default Article;
