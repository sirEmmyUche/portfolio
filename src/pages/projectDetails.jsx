import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails(){
    const params = useParams();
    const [projectId, setProjectId] = useState(null);

    useEffect(()=>{
        const getprojectById = async()=>{
            try{
                const data = await fetch(`/api/projects/${params.id}`);
                const res = await data.json();
                setProjectId(res.project);
            }catch(err){console.log(err)}
        }
        getprojectById();
    },[params.id])

    if(!projectId){
        return <h1 className="project-details-loading">Loading.....</h1>
    }
    return(
        <div className="project-details-pg">
            <h1 className="project-details">Project Details</h1> 
            <div className="display-project-detail">
                <div className="projectId-img-box">
                    <img src={projectId.imgUrl} alt="project image"/>
                </div>
                <div className="projectId-name">{projectId.name}</div>
                <div className="project-desc">{projectId.description}</div>
                <a href={projectId.link} className="link-to-project">Check project</a>
            </div>
        </div>
    )

}


export default ProjectDetails;