import React, {useState, useEffect, useContext} from 'react'
import Pagination from '../components/Pagination'
import Tasks from '../components/Tasks'
import { TodoContext, TaskContext } from '../context/TodoContext'

const Dashboard = () => {
    const {people, setPeople} = useContext(TodoContext)
    const {tasks, setTasks} = useContext(TaskContext)
    
    const [isloading, setIsLoading] = useState(false)
    const [taskPerPage, setTaskPerPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const [toggle, setToggle] = useState(1)

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

    //Sorting tasks in accordance to status
    const done = tasks.filter(task => task.completed===true)
    const inProgress = tasks.filter(task => task.completed===false)
    function handleStatusSort(){
        if(toggle){
            setTasks([...done, ...inProgress])
            setToggle(1-toggle);
        }else{
            setTasks([...inProgress, ...done])
            setToggle(1-toggle);
        }

    }


    return (
        <div className="dashboardContainer">
            <Tasks 
                tasks={tasksForPage} 
                isLoading={isloading}
                handleStatusSort={handleStatusSort}
                toggle={toggle} />
            <Pagination 
                taskPerPage={taskPerPage} 
                totalTasks={tasks.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}

export default Dashboard
