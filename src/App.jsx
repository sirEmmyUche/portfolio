import {RouterProvider,
  createBrowserRouter,
  Routes,
  Route,} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Project from "./pages/projects"
import Layout from "./layouts/layout"

import "./server"

const router = createBrowserRouter([{path:"*", Component:Root}])

function Root(){
  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Project/>}/>
        </Route>
    </Routes>
  )
}

function App(){
  return < RouterProvider router={router}/>
}

export default App
