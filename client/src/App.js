import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import SoliderDeck from './components/SoliderDeck/SoliderDeck'; 
import JobDeck from './components/JobDeck/JobDeck';
import JobController from './components/JobController/JobController';
import './App.css';

const App = () => {
  const [messageState, setMessageState] = useState('');
  const [soldiers, setSoldiers] = useState([]);
  const [jobs, setJobs] = useState();

  useEffect(() => {
    const httpRequest = async () => {
      const response = await axios.get('http://localhost:5000');
      setSoldiers(response.data.soldiers);
      setJobs(response.data.jobs);
    }
    httpRequest();
  }, [messageState]);

  const createSolider = async (event, formState) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000', formState);
        const message = `${response.data.soldierName} added to soliders list`;
        setMessageState(message);            
    } catch (error) {
        setMessageState(error.message);
    }
  }

  const createJob = async (event, formState) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/job', formState); 
      const message = `New ${response.data.status} job was added`;
      setMessageState(message);
    } catch (error) {
      setMessageState(error.message);
    }
}

  return (
    <Fragment>
      <div className={'main-part-one'}>
        <small>{messageState}</small>
        <SoliderDeck onSend={createSolider}/>
        <JobDeck onSend={createJob}/>
      </div>
      <div className={'main-part-two'}>
        <JobController jobs={jobs} soldiers={soldiers}/>
      </div>
    </Fragment>
  );
}

export default App;
