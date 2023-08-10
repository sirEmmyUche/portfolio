import Intro from "../pages/intro"
import Nav from "../pages/nav"


 function Home(){
    return(
            <header className="home-header">
                 <Nav/>
                <Intro/>
            </header>
    )
}

export default Home;