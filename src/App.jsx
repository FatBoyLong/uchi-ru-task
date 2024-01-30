import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CatsFavorite from "./pages/CatsFavorite";
import CatsMain from "./pages/CatsMain";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <CatsMain />,
      },
      {
        path: "favorite",
        element: <CatsFavorite />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
