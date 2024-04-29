import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import RouteConfig from "./components/pages/RouteConfig";
import RouteError from "./components/pages/RouteError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteConfig />} path="/">
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<RouteError />}></Route>,
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
