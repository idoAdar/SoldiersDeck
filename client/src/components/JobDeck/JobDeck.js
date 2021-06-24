import React, { useState } from 'react';

import './JobDeck.css';

const JobDeck = props => {
    const [formState, setFormState] = useState({
        title: '',
        status: 'Urgent'
    });

    const updateState = event => {
        setFormState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    };

    const status = ['Urgent', 'Usual'];

    return (
        <div className={'job-deck-main'}>
            <h3>Create New Job</h3>
            <form onSubmit={(e) => props.onSend(e, formState)}>
                <input type={'text'} onChange={updateState} value={formState.title} name={'title'}/>
                <select onChange={updateState} value={formState.status} name={'status'}>
                    {status.map(status => {
                        return (
                            <option key={status}>{status}</option>
                        )
                    })}
                </select>
                <button type={'submit'}>Create Job</button>
            </form>
        </div>
    )
}

export default JobDeck;