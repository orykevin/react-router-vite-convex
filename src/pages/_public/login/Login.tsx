import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Navigate } from "react-router";

const Login = () => {
  const { signIn } = useAuthActions();
  const user = useQuery(api.users.getUser);
  console.log(user, "user");

  if (user) {
    return <Navigate to="/main" />;
  }

  return (
    <div>
      <button onClick={() => signIn("google")}>Login</button>
    </div>
  );
};

export default Login;
