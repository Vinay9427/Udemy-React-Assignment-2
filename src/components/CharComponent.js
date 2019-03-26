import React from 'react';
import './Char.css'

const charcomp = (props) =>{
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };
    return(
        <div style={style}>
            <p onClick={props.click}>{props.character}</p>
        </div>
    )
}

export default charcomp;