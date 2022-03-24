import React from 'react';
import './Onetodo.css'

const Onetodo = ({item, deleteTodo, funcForEdit, changeStatus}) => {
    return (
        <li  className={item.status ? 'completed' : ''}>
            <input type="checkbox" onChange={()=>changeStatus(item.id)}/>
            {item.title}

            <button onClick={()=>deleteTodo(item.id)}>Del</button>
            <button onClick={()=>funcForEdit(item)} disabled={item.status ? true : false}>Edit</button>
        </li>
    );
};

export default Onetodo;