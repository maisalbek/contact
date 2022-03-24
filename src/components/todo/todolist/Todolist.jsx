import React from 'react';
import Onetodo from '../onetodo/Onetodo';
import './Todolist.css'

const Todolist = ({ works, deleteTodo, funcForEdit }) => {
    return (
        <ul>
           {works?.length && works.length > 0 ? (
        works.map((item) => <Onetodo funcForEdit={funcForEdit} deleteTodo={deleteTodo} key={item.id} item={item} />)
      ) : (
        <h2>Here will be shown your contacs</h2>
      )}
        </ul>
    );
};

export default Todolist;