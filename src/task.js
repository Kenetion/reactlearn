export const Task = (props) => {
    return (
    <div 
    className="task"
    style={{backgroundColor: props.completed ? "green" : "white"}}>
        <h1 className="taskName">{props.taskName}</h1>
        <button className="btn btn-complete"  onClick={() => props.completeTask(props.id)}> Complete </button>
        <button className='btn btn-delete' onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
    );
};