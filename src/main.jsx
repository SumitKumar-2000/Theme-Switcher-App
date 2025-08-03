import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "@/lib/routes/AppRoutes";
import "@styles/globals.css";
import AppProvider from "./lib/context/AppContext";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
