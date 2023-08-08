import {Outlet} from "react-router-dom"
import Nav from "../pages/nav.jsx"

function Layout(){
    return (
    <div>
        <Nav/>
        <main>
            <Outlet/>
        </main>
    </div>
    )
}

export default Layout