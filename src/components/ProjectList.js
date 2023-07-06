import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(ProjectItem);

  const proj = projects.map((proj1) => {
    // console.log(proj1) 
    // return 1
    // return <div>{proj1.name}</div>
    return <ProjectItem key={proj1.id} id={proj1.id} name={proj1.name} about={proj1.about} technologies={proj1.technologies}/>
  })

  // console.log(proj)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        {/* <ProjectItem id={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies}/> */}
        {proj}
      </div>
    </div>
  );
}

export default ProjectList;
