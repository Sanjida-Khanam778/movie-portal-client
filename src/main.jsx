import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import AuthProvider from "./Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <ToastContainer position="top-center"></ToastContainer>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
