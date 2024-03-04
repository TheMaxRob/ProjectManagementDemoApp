import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from './components/NewProject';
import NoProjectSelected from "./components/NoProjectSelected";


function App() {

  const [ projectsState, setProjectsState ] = useState({
    selectedProjectID: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      }
    })
  }

  function handleAddProject(projectData) {
      setProjectsState((prevState) => {

        const projectID = Math.random();
        const newProject = {
          ...projectData,
          id: projectID
        }
        return {
          ...prevState,
          selectedProjectID: undefined,
          projects: [...prevState.projects, newProject]
        }
      })
  }

  console.log(projectsState.projects);

  let content;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;