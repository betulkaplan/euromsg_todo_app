import React from 'react'
import TaskCard from './TaskCard'

const Tasks = ({tasks, isLoading}) => {
    if(isLoading) return <h1>Loading...</h1>
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Assignee</th>
                    <th>Status</th>
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
