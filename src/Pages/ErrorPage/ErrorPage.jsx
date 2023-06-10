import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div className="mt-8 flex flex-col justify-center items-center w-full h-full space-y-4">
      <h1 className="text-rose-600 text-6xl font-bold">Error</h1>
      <h1 className="text-rose-600 text-8xl font-bold">404</h1>
      <p className="text-error">Error: {error.statusText || error.message}</p>
      <Link to={"/"} className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;