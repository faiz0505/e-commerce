import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./layout/Auth.jsx";
import Root from "./layout/Root.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Contact from "./pages/Contact.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import Shop from "./pages/Shop.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    element: <Auth />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
  {
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/shop", element: <Shop /> },
      { path: "/contact-us", element: <Contact /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
