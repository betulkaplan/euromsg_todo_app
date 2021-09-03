import React from 'react'
import './pagStyle.css'

const Pagination = ({taskPerPage, totalTasks, paginate, currentPage}) => {
    const pageNumbers = []

    for (let i=1; i<= Math.ceil(totalTasks/taskPerPage); i++){
        pageNumbers.push(i)
    }


    return (
        <ul>
            <li onClick={()=>(currentPage>1)?paginate(currentPage-1):null}>[ Prev ]  </li>
            {
                pageNumbers.map((number, index)=><li key={index} onClick={()=>paginate(number)}>[ {number} ]  </li>)
            }
            <li onClick={()=>!(currentPage===pageNumbers.length)?paginate(currentPage+1):null}>[ Next ]  </li>
        </ul>
    )
}

export default Pagination
