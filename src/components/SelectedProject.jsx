import Button from "./Button";

export default function SelectedProject({ project}) {

    const formattedDueDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'short',
        day: 'numeric'
    })

    return (
        <div>
            <div className="flex flex-col">
                <header>
                    <h1>{project.title}</h1>
                    <Button>Delete</Button>
                </header>

                <p>{project.formattedDueDate}</p>
                <p>{project.description}</p>
            </div>

            TASKS
        </div>
    )
}