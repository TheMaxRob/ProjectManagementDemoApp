import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from './components/NewProject';
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";



function App() {

  const [ projectsState, setProjectsState ] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    console.log('handleAddTask in App.jsx called!');
    setProjectsState((prevState) => {

      const taskID = Math.random();
      const newTask = {
        text: text,
        projectID: prevState.selectedProjectID,
        id: taskID
      };

      return {
        ...prevState,
        selectedProjectID: prevState.selectedProjectID,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    console.log('handleDeleteTask called in App.jsx!')
    return (
      setProjectsState((prevState) => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter(task => task.id !== id)
        }
      })
    )
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      }
    })
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id
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

  function handleDeleteProject() {
    return (
      setProjectsState((prevState) => {
        return {
          ...prevState,
          selectedProjectID: undefined,
          projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectID )
        }
      })
    )
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID)

  let content = <SelectedProject 
                  onDeleteTask={handleDeleteTask} 
                  onAddTask={handleAddTask} 
                  onDelete={handleDeleteProject} 
                  project={selectedProject}
                  tasks={projectsState.tasks}
                  />;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onCancel={handleCancel} onAdd={handleAddProject}/>;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } 

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onSelectProject={handleSelectProject} 
        projects={projectsState.projects} 
        onStartAddProject={handleStartAddProject}
        selectedProjectID={projectsState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;