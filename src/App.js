import React, { useState } from 'react';
import './styles.css';
import Axios from 'axios';

import MissionForm from './components/MissionForm';
import MissionList from './components/MissionsList';


export default function App() {
  const [ data, setData ] = useState([]);
  
  
  
  const getMissions = () => {
    Axios.get('https://api.spacexdata.com/v3/missions')
        .then(res => {
          setData(res);
          console.log('Res', res);
        })
        .catch(err => console.log('Data error', err));
  };




    return (
        <div className='App'>
          <MissionForm onClick={getMissions}/>
          <MissionList />
        </div>
    );
}
