import React from 'react'
import TaskCard from './TaskCard'
import './tasksStyle.css'

const Tasks = ({tasks, isLoading, handleStatusSort}) => {

    if(isLoading) return <h1>Loading...</h1>
    return (
        <table id="tasksContainer">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Assignee</th>
                    <th onClick={handleStatusSort}>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                tasks.map(task=><TaskCard task={task} key={task.id}/>)
            }
            </tbody>

        </table>
    )
}

export default Tasks
