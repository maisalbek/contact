import React, { useState } from 'react';

const State = () => {
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        color: 'red',
    })
    let [carcolor, setCarColor] = useState('green')
    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>It is a <span style={{color: car.color}}> {car.color}</span> {car.model}</p>
            <button onClick={()=>setCar({...car, color: 'blue'})}>Change color</button>

            {/* <h2 style={{color: carcolor}}>My car is {carcolor} color</h2>
            <button onClick={()=>setCarColor('gold')}>Change color to gold</button> */}
        </div>
    );
};

export default State;