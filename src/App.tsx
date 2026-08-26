import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
