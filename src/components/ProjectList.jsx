export default function ProjectList({ projects, onProjectClick }) {
    return (
        <div>
            <ul>
            {projects.map((project, index) => {
                return (
                    <button key={project.name} onClick={() => onProjectClick(index)}
                        className="">
                            { project.name }
                    </button>
                );
            })}
            </ul>

        </div>
    );
}