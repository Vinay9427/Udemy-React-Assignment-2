import React from 'react';

const validation = (props) =>{
    let isvalid ;
    if(props.length <= 5) {
        isvalid = <p>Text too Short</p>
    } else isvalid = <p>Text is good Enough </p>
    return(
        <div>
            {isvalid}
        </div>
    )
}


export default validation;