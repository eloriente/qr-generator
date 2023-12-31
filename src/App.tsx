// Vendors
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Layouts
import RootLayout from "layouts/root/root-layout.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: 'root',
    children: [
      {
        index: true,
        element: <h1>Hello World</h1>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
