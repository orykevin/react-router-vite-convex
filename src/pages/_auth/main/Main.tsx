import { useAuthActions } from "@convex-dev/auth/react";

const MainPage = () => {
  const { signOut } = useAuthActions();
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default MainPage;
