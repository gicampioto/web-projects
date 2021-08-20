import Task from "./Task.js"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) =>
            (<Task
                className={task}
                key={task.id}
                task={task}
                // passa o onDelete com o deleteTask pro componente Tasks
                onDelete={onDelete}
                onToggle = {onToggle}
            />))}
        </>
    )
}

export default Tasks
