import React from 'react';

const MissionList = (props) => {
    return (
        <div>
            <h1>{props.mission_name}</h1>
            <p>Manufacturer: {props.manufacturers}</p>
        </div>
    )};

export default MissionList;