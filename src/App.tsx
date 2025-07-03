import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/layout/PublicLayout";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
