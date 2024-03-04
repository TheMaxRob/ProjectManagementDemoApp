import Button from "./Button";
import Tasks from "./Tasks";

export default function SelectedProject({ onDelete, project }) {

    const formattedDueDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'short',
        day: 'numeric'
    })

    return (
        <div className="w-[35rem] mt-16">
            <header className="border-b-2 border-stone-300 pb-4 mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button onClick={onDelete}>Delete</Button>
                </div>
                <p className="mb-4 text-stone-400">{project.formattedDueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>

            <Tasks />
        </div>
    )
}