import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "@/lib/routes/AppRoutes";
import "@styles/globals.css";

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
