import React from 'react';

const MissionList = (props) => {
    console.log('Props log', props)
    return (
        <div>
            <h1>{props.missionName}</h1>
            <p>Manufacturer: {props.manufacturers}</p>
            {/* <p>{props.payload_ids}</p>
            <p>Website: {props.website}</p>
            <p>Wiki: {props.wikipedia}</p> */}
        </div>
    )};

export default MissionList;