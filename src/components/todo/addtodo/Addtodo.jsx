import React, { useState } from 'react';

const Addtodo = ({funcForadding}) => {
    const [newWork, setnewWork] = useState({id: null, title: ''})
    const handleChange = (event)=>{
        // console.log(event.target.name);

        let obj = {
            ...newWork,
            [event.target.name]:event.target.value,
        }
        // console.log(obj);
        setnewWork(obj)
    }
    const handleSubmit = ()=>{
    if(newWork.title===''){
        alert('Enter a field')
        return 
    }
        funcForadding(newWork) 
        setnewWork({id: null, title: ''})   
    }
    return (
        <div>
            <h1>My Todo</h1>
            <h2>Add New Todo</h2>
            <input name='title' value={newWork.title} onChange={(event)=> handleChange(event)} type="text" />
            <button onClick={()=>handleSubmit()}>Add</button>
        </div>
    );
};
export default Addtodo;