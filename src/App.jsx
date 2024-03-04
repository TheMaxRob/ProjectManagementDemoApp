import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from './components/NewProject';
import NoProjectSelected from "./components/NoProjectSelected";


function App() {

  const [ projectsState, setProjectsState ] = useState({
    selectedProjectID: undefined,
    projects: []
  });

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;