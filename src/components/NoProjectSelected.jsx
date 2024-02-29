export default function NoProjectSelected({ showingAddProject }) {
    return (
        <div className="relative  h-screen w-full flex flex-col gap-6 items-center top-24">
            <img className="h-16 w-16" alt="Notebook" src="../public/logo.png" />
            <h1 className="text-gray-500 font-bold">No Project Selected</h1>
            <h3 className="text-gray-400 font-medium">Select a project or get started with a new one</h3>
            <button className="bg-black rounded-md text-gray-400 px-4 py-2" onClick={showingAddProject}>Create New Project</button>
        </div>
    );
}