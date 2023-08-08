import { useState,useEffect,useReducer,useRef} from 'react'
import '../styles/home.css'

function Project(){
    const [project, setProject] = useState([]);
    
    const view = {web:false, all:true, mobile:false};

    const [viewproject, dispatch] = useReducer(
        (prevState, action)=>{
            switch(action.type){
                case "VIEW_ALL": return {...prevState, web:false, mobile:false, all:true};
                case "VIEW_WEB": return {...prevState, web:true, all:false, mobile:false};
                case "VIEW_MOBILE_APP":return{...prevState, web:false, mobile:true, all:false};
                default: prevState;
            }
        }, view
        ) 

        const isInitialMount = useRef(true);

    useEffect(()=>{
        if (isInitialMount.current) {
            // Skip fetching data on initial render
            isInitialMount.current = false;
            return;
        }
        const getProject =async()=>{
            try{
                const data = await fetch("api/projects");
                const res = await data.json();
                setProject(res.projects)
            }catch(err){console.log(err)}
        }
        getProject();
    },[viewproject]);

    const renderProject = project.map((item)=>{
        
        if(viewproject.all===true){
            return(
                <div key={item.id} className='map-project-wrapper'>
                    <div className='project-img-container'>
                        <img src={item.imgUrl} alt='project image'/>
                    </div>
                    <div className='map-item-name'>{item.name}</div>
                </div>
            )
        }else if(viewproject.web === true && item.isMobile == false){
            return (
                <div key={item.id} className='map-project-wrapper'>
                    <div className='project-img-container'>
                        <img src={item.imgUrl} alt='project image'/>
                    </div>
                    <div className='map-item-name'>{item.name}</div>
                </div>
            )
        }
        if(viewproject.mobile === true && item.isMobile==true){
            return (
                <div key={item.id} className='map-project-wrapper'>
                    <div className='project-img-container'>
                        <img src={item.imgUrl}alt='project image'/>
                    </div>
                    <div className='map-item-name'>{item.name}</div>
                </div>
            )
        }
    })

    return(
        <div className='project-pg-container'>
            <h1 className='project-heading'>Projects</h1>
            <nav className="project-pg-nav">
                <ul className='project-pg-ul'>
                    <li onClick={()=>{dispatch({type:"VIEW_ALL"})}}>All</li>
                    <li onClick={()=>{dispatch({type:"VIEW_WEB"})}}>Web</li>
                    <li onClick={()=>{dispatch({type:"VIEW_MOBILE_APP"})}}>Mobile app</li>
                </ul>
            </nav>
            <div className='project-render'>{renderProject}</div>
        </div>
    )
}

export default Project