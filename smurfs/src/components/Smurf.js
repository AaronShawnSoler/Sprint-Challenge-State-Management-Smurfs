import React from 'react';

function Smurf(props) {
    return(
        <div>
            <h1>{props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => props.delete(props.smurf.id)}>Delete</button>
        </div>
    )
}

export default Smurf;