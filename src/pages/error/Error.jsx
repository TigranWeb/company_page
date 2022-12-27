import { useRouteError, Link } from "react-router-dom";
import "./error.css";

export const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="error-link" >BECK TO HOME</Link>
      </div>
    </div>
  );
}