import {Link} from "react-router-dom"
import { useState } from "react"
import '../styles/home.css'


function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = ()=>{
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className="home-nav">
        <div className='logo'>
            <div>Uche</div> 
        </div>
        <ul id={toggleMenu? "hidephoneMenubar" :"phoneMenubar"}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/project"}>Projects</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
        <div className="menubar">
          <img src="/images/icon-menu.svg" alt="menubar"onClick={handleToggleMenu} />
        </div>
     </nav>
   
  )
}

export default Nav