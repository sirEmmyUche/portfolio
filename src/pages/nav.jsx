import {Link} from "react-router-dom"
import { useState } from "react"
import '../styles/home.css'


function Nav() {
  const [toggleMenu, setToggleMenu] = useState(null);
  const handleToggleMenu = ()=>{
    setToggleMenu(!toggleMenu)
  }
  
  return (
    <nav className="home-pg-nav">
        <div className='logo'>
            <div className="on-mobile-logo">Uche</div> 
        </div>
        <ul id={toggleMenu?"responsiveness":null}>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
            <li >
              <Link to={"/about"}>About</Link>
            </li>
                <li >
                  <Link to={"/project"}>Project</Link>
                </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
        </ul>
        <div className="menubar">
          <img src="/images/icon-menu.svg" alt="menubar"onClick={handleToggleMenu} />
        </div>
     </nav>
   
  )
}

export default Nav