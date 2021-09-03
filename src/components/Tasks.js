import React from 'react'
import TaskCard from './TaskCard'
import './tasksStyle.css'
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const Tasks = ({tasks, isLoading, handleStatusSort, toggle}) => {

    if(isLoading) return <h1>Loading...</h1>
    return (
        <table id="tasksContainer">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Assignee</th>
                    <th onClick={handleStatusSort} className="status">Status {toggle?<BiChevronUp />:<BiChevronDown />}</th>
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
