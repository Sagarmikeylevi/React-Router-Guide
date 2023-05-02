import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import Products from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <Products /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
