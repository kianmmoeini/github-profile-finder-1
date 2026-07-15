import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;