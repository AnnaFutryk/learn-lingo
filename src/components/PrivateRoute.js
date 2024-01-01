import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/auth-selectors";

//якщо маршрут приватний і користувач залогінений - рендиримо компонент, інакше -рендер на renderTo

//1. повинен повторювати АРІ Route
//2.повинен рендерити Route
const PrivateRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
