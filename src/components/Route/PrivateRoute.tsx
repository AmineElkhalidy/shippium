import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

interface PrivateRouteProps {
  children: JSX.Element | JSX.Element[];
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuth } = useAppSelector((state) => state.auth);

  return <Fragment>{isAuth ? children : <Navigate to="/login" />}</Fragment>;
}
