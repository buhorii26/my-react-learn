import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div>404 not found page!!!</div>
    </>
  );
}

export default ErrorPage;
