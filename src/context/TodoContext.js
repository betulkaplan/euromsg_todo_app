import React,{ createContext, useState } from 'react'

const TodoContext = createContext()
const TaskContext = createContext()

const TodoContextProvider = ({children}) => {
    const [people, setPeople] = useState([])
    const [tasks, setTasks] = useState([])
    return (
        <TodoContext.Provider value={{people, setPeople}} >
            <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
            </TaskContext.Provider>
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoContextProvider, TaskContext}
