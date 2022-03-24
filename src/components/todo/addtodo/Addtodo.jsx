import React, { useState } from 'react';

const Addtodo = ({funcForadding}) => {
    const [newWork, setnewWork] = useState({id: null, title: '', phone: ''})
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
    if(newWork.title===''|| newWork.phone===''){
        alert('Enter a field')
        return 
    }
        funcForadding(newWork) 
        setnewWork({id: null, title: '', phone: ''})   
    }
    return (
        <div>
            <h1>Contact Book</h1>
            <div>

            <label htmlFor="title">Your Name</label>
            <input name='title' value={newWork.title} onChange={(event)=> handleChange(event)} type="text" />
            <label htmlFor="phone">Phone Number</label>
            <input name='phone' value={newWork.phone} onChange={(event)=> handleChange(event)}type="text" />
            </div>
            <button onClick={()=>handleSubmit()}>Add</button>
        </div>
    );
};
export default Addtodo;