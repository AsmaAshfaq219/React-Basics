import React from 'react';
import './Char.css';

export default (props) => {
    return(
    <div className = 'charStyle' onClick={props.deleteHandler}>
    {props.letter}
    </div>
    );
}
