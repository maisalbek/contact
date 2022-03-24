import React, { useState } from 'react';
import './Edittodo.css' 


const Edittodo = ({currentWord, saveEdit, setEditModal}) => {
    const [inpEdit, setInpEdit] = useState(currentWord)
    const handleChange =(e)=>{
        let obj = {
            ...inpEdit,
            [e.target.name] : e.target.value
        }
        setInpEdit(obj)
    }
    const handleSubmit = ()=>{
        saveEdit(inpEdit)
        setEditModal()
        setInpEdit({id:null, title: ''})
    }
    return (
        <div className='modal'>
            <div className='inner-modal'>
                <h2>Edit todo</h2>
                <input onChange={(e)=>handleChange(e)} type="text" value={inpEdit?.title} name='title' />
                <button onClick={()=>handleSubmit()}>Save</button>
                <button onClick={()=>setEditModal()}>Close</button>
            </div>
        </div>
    );
};

export default Edittodo;