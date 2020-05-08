import React from 'react';

const TextInfo = (props) => (
    <div className="info-wrapper">
        <p>There are {props.nStates} states!</p>
        {props.nStates!=0? <p>State {props.state + 1}</p>: null }
    </div>
);

export default TextInfo;