import React, {useState, useEffect, useContext} from 'react'
import Pagination from '../components/Pagination'
import Tasks from '../components/Tasks'
import { TodoContext, TaskContext } from '../context/TodoContext'

const Dashboard = () => {
    const {people, setPeople} = useContext(TodoContext)
    const {tasks, setTasks} = useContext(TaskContext)
    
    const [isloading, setIsLoading] = useState(false)
    const [taskPerPage, setTaskPerPage] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {
            setTasks(json)
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>{
                setPeople(json)
                setIsLoading(false)
            })
            setIsLoading(false)
        })
    }, [])
    
    // Get tasks per page
    const indexOfLastTask = currentPage * taskPerPage;
    const indexOfFirstTask = indexOfLastTask - taskPerPage;
    const tasksForPage = tasks.slice(indexOfFirstTask, indexOfLastTask)

    //Paginate 
    const paginate = (page) =>setCurrentPage(page)
    return (
        <div>
            <Tasks tasks={tasksForPage} isLoading={isloading} />
            <Pagination 
                taskPerPage={taskPerPage} 
                totalTasks={tasks.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}

export default Dashboard
