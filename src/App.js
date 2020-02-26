import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

import MissionForm from './components/MissionForm';
import MissionList from './components/MissionsList';

export default function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getMissions = () => {
        setLoading(true);
        // setError(false);
        axios
            .get('https://api.spacexdata.com/v3/missions')
            .then(res => {
                setData(res.data);
                console.log('Res', res.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error)
            })
    };

    return (
        <div className='App'>
            <MissionForm onClick={getMissions} />
            { error && <div style={{color: `red`}}> An error occurred while fetching missions</div> }
            { loading && <div style={{color: `green`}}>Fetching missions.</div>}
            {data.map(mission => (
                <MissionList
                    missionName={mission.mission_name}
                    manufacturers={mission.manufacturers}
                />
            ))}
        </div>
    );
}
