import React from 'react';
import './Onetodo.css'

const Onetodo = ({item, deleteTodo, funcForEdit}) => {
    return (
        <li>
            <div className='card'>
            <p>Name: {item.title}</p>
            <p>Phone: {item.phone}</p>
            <div>
            <button onClick={()=>deleteTodo(item.id)}>Del</button>
            <button onClick={()=>funcForEdit(item)}>Edit</button>
            </div>
            </div>
        </li>
    );
};

export default Onetodo;