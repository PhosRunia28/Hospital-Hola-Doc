import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/pages/About";
import Appointment from "./components/pages/Appointment";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Dev from "./components/pages/Dev";
import Doctor from "./components/pages/Doctor";
<<<<<<< HEAD
import Gallery from "./components/pages/Gallery";
=======
>>>>>>> 2079174244ea82ca5b10e44d7323136f0ae76bfb
import Home from "./components/pages/Home";
import Pricing from "./components/pages/Pricing";
import RouteConfig from "./components/pages/RouteConfig";
import RouteError from "./components/pages/RouteError";
import Service from "./components/pages/Service";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteConfig />} path="/">
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="doctor" element={<Doctor />}></Route>
        <Route path="service" element={<Service />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="dev" element={<Dev />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="appointment" element={<Appointment />}></Route>
        <Route path="*" element={<RouteError />}></Route>,
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
