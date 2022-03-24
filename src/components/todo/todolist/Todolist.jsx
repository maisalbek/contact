import React from 'react';
import Onetodo from '../onetodo/Onetodo';
import './Todolist.css'

const Todolist = ({ works, deleteTodo, funcForEdit, changeStatus }) => {
    return (
        <ul>
           {works?.length && works.length > 0 ? (
        works.map((item) => <Onetodo changeStatus={changeStatus} funcForEdit={funcForEdit} deleteTodo={deleteTodo} key={item.id} item={item} />)
      ) : (
        <h1>No works to do</h1>
      )}
        </ul>
    );
};

export default Todolist;