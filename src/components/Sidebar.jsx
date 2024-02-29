import { useState } from "react";
import ProjectList from "./ProjectList";

export default function SideBar({ projects, onProjectClick, showingAddProject }) { 


    function handleAddProjectClick() {
        showingAddProject();
    }


    function handleProjectClick(index) {
        onProjectClick(index);
    }


    return (
        <div className="h-screen bg-black w-1/4 rounded-r-xl">
            <div className="text-white absolute left-10 top-16">
                <h1 className="text-xl ">YOUR PROJECTS</h1>
                <button onClick={handleAddProjectClick} 
                    className="my-10 bg-opacity-50 bg-gray-400 px-4 py-2 rounded-lg text-gray-200 text-opacity-50 hover:bg-opacity-70 hover:text-white">
                        + Add Project
                </button>
                
                <ProjectList onProjectClick={() => onProjectClick(index)} projects={projects} />
            </div>
        </div>
    )
}