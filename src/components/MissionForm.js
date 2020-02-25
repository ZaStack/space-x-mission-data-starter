import React from 'react';

const MissionForm = (props) => {
    return (
        <button className="missionButton" onClick={props.onClick}>Get Missions</button>
    )
}

export default MissionForm;