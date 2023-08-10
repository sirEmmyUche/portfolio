import {RouterProvider,
  createBrowserRouter,
  Routes,
  Route,} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Project from "./pages/projects"
import ProjectDetails from "./pages/projectDetails"
import Layout from "./layouts/layout"

import "./server"

const router = createBrowserRouter([{path:"*", Component:Root}])

function Root(){
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/"element={<Layout/>}>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/project/:id" element={<ProjectDetails/>}/>
        </Route>
    </Routes>
  )
}

function App(){
  return < RouterProvider router={router}/>
}

export default App
