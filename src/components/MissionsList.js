import React from 'react';

const MissionList = (props) => {
    return (
        <div>{props.map(mission => {
            return (
                <div className='mission-card' key={props.mission_id} mission={props.mission}></div>
            )
        })</div>
    )
}

export default MissionList;