import React, { useState } from "react";
import axios from 'axios';

import './JobController.css';

const JobController = props => {
    const [message, setMessage] = useState('');
    const [curJob, setCurJob] = useState('');
    const [curSolider, setCurSolider] = useState('');
    const [participants, setParticipants] = useState([]);

    const fetchCandidates = async (jobId) => {
        try {
            const response = await axios.get(`http://localhost:5000/${jobId}`);
            const soldiersPerJob = response.data;
            setCurJob(jobId);
            setParticipants(soldiersPerJob);            
        } catch (error) {
            setMessage(error.message);
        }
    };

    const deleteHandler = async (soliderId, jobId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/${soliderId}/${jobId}`);
            setMessage(response.data.message);
            fetchCandidates(jobId);
        } catch (error) {
            setMessage(error.message);
        }
    }

    const updateJob = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/update', { soliderId: curSolider, jobId: curJob });
            setMessage(response.data.message);
            fetchCandidates(curJob);
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <div className={'job-controller-main'}>
            <div className={'job-controller-main-title'}>
                {<small>{message}</small>}
                <h3>Controller Deck</h3>
            </div>
            <div>
                <select onChange={(e) => fetchCandidates(e.target.value)}>
                    {props.jobs?.map(job => <option key={job.id} value={job.id}>{job.title}</option>)}
                </select>
            </div>
            <form onSubmit={updateJob}>
                <select onChange={(e) => setCurSolider(e.target.value)}>
                    {props.soldiers?.map(soldier => <option key={soldier.id} value={soldier.id}>{soldier.soldier_name}</option>)}
                </select>
                <button type={'submit'}>Add</button>
            </form>
            <ul>
                {participants?.map(soldier => {
                    return (
                        <li key={soldier.id} onClick={() => deleteHandler(soldier.id, +curJob)}>
                            {`Name: ${soldier.soldier_name} Age: ${soldier.age}`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default JobController;