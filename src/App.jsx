import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayouts.jsx";

import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import ReactQueryPost from "./Pages/reactquery-post.jsx";

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
            path="/post"
            element={<ReactQueryPost />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;