///this is for when click the button log ins direct came to Home page 
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

const UserRoutes = () => {

  const { user } = useSelector((state) => state.userSlice);
  const location = useLocation();


  return user ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />;



}
export default UserRoutes


///this is for when click the button log ins direct came to Home page 