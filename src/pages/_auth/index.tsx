import { Navigate, Outlet } from "react-router";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";

const AuthLayout = () => {
  const user = useQuery(api.users.getUser);
  if (user === undefined) return <div>Loading ...</div>;
  if (!user) return <Navigate to="/" />;
  // checking user is logged in or not
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
