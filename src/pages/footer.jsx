import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer>
            <h1><Link to={"/contact"} id="footer-link">Say Hello to @uche</Link></h1>
        </footer>
    )
}

export default Footer