import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";

import HomePage from "./pages/HomePage";
import ClientPage from "./pages/ClientPage";
import JdSupplier from "./pages/ClientPage/JdSupplier";
import JdShereWin from "./pages/ClientPage/JdSupplier/JdShereWin";
import JdSherWinEsmalte from "./pages/ClientPage/JdSupplier/JdShereWin/JdSherWinEsmalte";

import "./App.css";
import CatalizadorJdSherwinEsmalt from "./pages/CatalizadorJdSherwinEsmalt";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/clients",
      element: <ClientPage />,
    },

    {
      path: "/johndeere",
      element: <JdSupplier />,
    },
    {
      path: "/johndeere/sherwin",
      element: <JdShereWin />,
    },
    {
      path: "/johndeere/sherwin/esmalte",
      element: <JdSherWinEsmalte />,
    },
    {
      path: "/johndeere/catalizador",
      element: <CatalizadorJdSherwinEsmalt />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Normalize />
    </>
  );
}

export default App;
