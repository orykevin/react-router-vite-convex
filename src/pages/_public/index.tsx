import { Navigate, Outlet, useLocation } from "react-router";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";

const PublicLayout = () => {
  // checking user is logged in or not
  const path = useLocation();
  console.log(path);
  const user = useQuery(api.users.getUser);
  if (user === undefined) return <div>Loading ...</div>;
  if (user && path.pathname === "/") {
    return <Navigate to="/main" />;
  } else {
    return <Outlet />;
  }
};

export default PublicLayout;
