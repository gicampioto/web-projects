const Task = ({ task, onDelete, onToggle }) => {
    return (
        //use a expression to put the class
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
            <h3>{task.text}
                <span
                    //quando o x for clicado ele chama a função onDelete que contem o deleteTask passando o id como paremetro
                    onClick = {() => onDelete(task.id)}
                    style = {{ color: 'red', cursor: 'pointer' }}
                >x</span>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
