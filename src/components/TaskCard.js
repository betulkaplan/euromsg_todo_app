import React, {useContext} from 'react'
import {TodoContext, TaskContext} from "../context/TodoContext"

const TaskCard = ({task}) => {
    const { people, setPeople} = useContext(TodoContext)
    const { tasks, setTasks} = useContext(TaskContext)
    const user = people.filter(item => item.id === task.userId)
    function handleDelete(e){
        e.preventDefault();
        const tempArr = tasks.filter(item => item.id!==task.id)
        console.log(tempArr)
        setTasks([...tempArr])


    }
    return (
        <tr>
            <td>{task?.id}</td>
            <td>{task?.title}</td>
            <td>{user[0]?.name}</td>
            <td>{task?.completed?"Done":"In Progress"}</td>
            <td>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default TaskCard
