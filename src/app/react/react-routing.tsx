import * as React from "react";
import { createBrowserRouter } from "react-router-dom"
import { ReactHome } from "./components/react-home/react-home";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <ReactHome />,
      errorElement: <span />,
    },
    {
      path: "/s",
      element: <span>Hola</span>,
      errorElement: <span />,
    }
  ]);