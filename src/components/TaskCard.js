import React, {useContext, useState} from 'react'
import {TodoContext, TaskContext} from "../context/TodoContext"
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'

const TaskCard = ({task}) => {
    const { people, setPeople} = useContext(TodoContext)
    const { tasks, setTasks} = useContext(TaskContext)
    const [showModal, setShowModal] = useState(false)
    const [completed, setCompleted] = useState(task.completed)
    const [title, setTitle] = useState(task.title)
    const user = people.filter(item => item.id === task.userId)
    function handleDelete(e){
        e.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${task.id}`, {
            method: 'DELETE',
        }).then(res=> {
            if(res.status===200) {
                const tempArr = tasks.filter(item => item.id!==task.id)
                setTasks([...tempArr])
            }
        });


    }

    function handleEdit(e){
        e.preventDefault();
        setShowModal(true)

    }

    function handleEditSave(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${task.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title,
                completed: completed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setShowModal(false)
                task.title = title;
            });
    }

    return (
        <tr>
            <td>{task?.id}</td>
            <td>{task?.title}</td>
            <td>{user[0]?.name}</td>
            <td>{task?.completed?"Done":"In Progress"}</td>
            <td>
                <Button onClick={handleEdit} className="mr-3">Edit</Button>
                <Button variant="danger" className="ml-3" onClick={handleDelete}>Delete</Button>
                <Modal show={showModal}>
                    <Modal.Header>Edit The Task</Modal.Header>
                    <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text  id="inputGroup-sizing-default">Title</InputGroup.Text>
                        <FormControl
                        onChange={(e)=>setTitle(e.target.value)}
                        defaultValue={title}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox
                            defaultChecked={completed}
                            onChange={(e)=>setCompleted(e.target.checked)} 
                            className="mr-5" 
                            aria-label="Checkbox for following text input" />
                        Completed
                    </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleEditSave}>Save</Button>
                        <Button variant="danger" onClick={()=>setShowModal(false)}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
    )
}

export default TaskCard
