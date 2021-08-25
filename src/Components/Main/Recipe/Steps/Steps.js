import React from 'react';

function Steps(props) {

    if(props.steps === undefined) {
        return null;
    }

    return (
        <div className={props.className}>
            <h2>Steps</h2>

            <ul>
                {props.steps.map(steps => {
                    return <li key={steps.position}>{steps.position}: {steps.display_text} </li>
                })}
            </ul>
        </div>
    );
}

export default Steps;