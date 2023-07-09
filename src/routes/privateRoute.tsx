import { FunctionComponent, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface IProp {
  children: ReactElement;
}

const PrivateRoute: FunctionComponent<IProp> = ({ children }) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else return children;
};

export default PrivateRoute;
