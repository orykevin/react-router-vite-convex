import { Routes, Route } from "react-router";
import AuthLayout from "./_auth";
import Login from "./_public/login/Login";
import PublicLayout from "./_public";
import MainPage from "./_auth/main/Main";
import Leaderboard from "./_public/stream-overlay/Leaderboard";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />} path="/">
        <Route index element={<Login />} />
      </Route>

      <Route element={<AuthLayout />} path="/main">
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
