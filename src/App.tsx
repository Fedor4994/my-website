import { Route, Routes } from "react-router-dom";
import Blog from "./views/Blog/Blog";
import Contacts from "./views/Contacts/Contacts";
import Home from "./views/Home/Home";
import PostPage from "./views/PostPage/PostPage";
import Profile from "./views/Profile/Profile";
import ProjectPage from "./views/ProjectPage/ProjectPage";
import Projects from "./views/Projects/Projects";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectPage />} />

        <Route path="blog" element={<Blog />} />
        <Route path="blog/post/:id" element={<PostPage />} />

        <Route path="contact" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
