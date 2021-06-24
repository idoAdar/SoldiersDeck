import React, { useState } from 'react';

import './SoliderDeck.css';

const SoliderDeck = props => {
    const [formState, setFormState] = useState({
        soldierName: '',
        role: 'Commander',
        age: 0
    });

    const updateState = event => {
        setFormState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    };

    const roles = ['Commander', 'Lieutenant', 'Recuirt'];

    return (
        <div className={'solider-deck-main'}>
            <h3>Add New Solider</h3>
            <form onSubmit={(e) => props.onSend(e, formState)}>
                <input type={'text'} onChange={updateState} value={formState.soldierName} name={'soldierName'}/>
                <select onChange={updateState} value={formState.role} name={'role'}>
                    {roles.map(role => <option key={role}>{role} </option>)}
                </select>
                <input type={'number'} onChange={updateState} value={formState.age} name={'age'}/>
                <button type={'submit'}>New Solider</button>
            </form>
        </div>
    )
}

export default SoliderDeck;