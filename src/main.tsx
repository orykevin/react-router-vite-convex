import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import MainRoute from "./pages/index.tsx";
import { BrowserRouter } from "react-router";
import { ConvexQueryCacheProvider } from "convex-helpers/react/cache";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexAuthProvider client={convex}>
      <ConvexQueryCacheProvider>
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </ConvexQueryCacheProvider>
    </ConvexAuthProvider>
  </StrictMode>
);
