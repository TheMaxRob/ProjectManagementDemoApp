import SideBar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from 'react';
import ProjectScreen from "./components/ProjectScreen";

function App() {

  const [ showingAddProject, setIsShowingAddProject ] = useState(false);
  const [ isShowingProject, setIsShowingProject ] = useState(false);
  const [ projects, setProject ] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  function handleAddProjectClick() {
    setIsShowingAddProject(true);
  }

  function handleProjectClick(index) {
    setIsShowingProject(true);
    setSelectedProjectIndex(index);
  }

  return (
    <div className="flex">
      <SideBar projects={projects} onProjectClick={handleProjectClick} showingAddProject={handleAddProjectClick}/>
      {showingAddProject && !isShowingProject ? <AddProject /> : <NoProjectSelected showingAddProject={handleAddProjectClick}/>}
      {isShowingProject &&
        (<ProjectScreen project={selectedProjectIndex}/> ) }



    </div>
  );
}

export default App;
