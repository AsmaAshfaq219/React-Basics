import React from 'react';

export default (props) => {
    let content = "Text too Short";
    if(props.inputLength > 5){
    content = "Text long enough";
}
    return(
        <div>
            <p>
            {content}
            </p>
        </div>
    );
}