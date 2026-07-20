import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayouts.jsx";

import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

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
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/projects"
            element={<Projects />}
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