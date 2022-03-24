import React, { useState } from 'react';
import './Conditions.css';

const Conditions = () => {
    const [isDark, setIsDark] = useState(false)
    console.log(isDark);
    return (
        <div className={`block ${isDark ? 'dark' : 'light'}`}>
           <h2 className='title'>This is {isDark===true ? ' Dark ': ' Light '} mode</h2> 
           <button onClick={()=>setIsDark(!isDark)}> {isDark===true ? 'Light': 'Dark'} mode</button>
           <br />
           {
               isDark ? <img width='900px' src='http://assets.stickpng.com/images/59db69d33752880e93e16efc.png' alt=""/> :<img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1618602532707-3OAII3QVHYKCW3KJ1HJU/cars_boast.jpg" alt="" />

           }
        </div>
    );
};

export default Conditions;