import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./Layouts/MainLayouts.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/reactquery-post.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
        />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;