import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

import MissionForm from './components/MissionForm';
import MissionList from './components/MissionsList';

export default function App() {
    const [data, setData] = useState([]);

    const getMissions = () => {
        axios.get('https://api.spacexdata.com/v3/missions')
            .then(res => {
                setData(res.data);
                console.log('Res', res);
            })
            .then(console.log(data))
            .catch(err => console.log('Data error', err));
    };

    return (
        <div className='App'>
            <MissionForm onClick={getMissions} />
            {data.map(mission => (
                <MissionList
                    missionName={mission.mission_name}
                    manufacturers={mission.manufacturers}
                />
            ))}
        </div>
    );
}
