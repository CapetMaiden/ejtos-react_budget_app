import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetForm = (props) => {
    const { dispatch,budget } = useContext(AppContext);

    const [budget, setBudget] = useState("");

    const submitEvent = () => {

        if(Budget > 20000) {
            alert("The value cannot exceed 20000");
            setBudget("");
            return
        }
    return (
        <div className='alert alert-secondary'>
        <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
        <label className="input-group-number" htmlFor="inputGroupSelect01">Allocation</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setBudget(event.target.value)}>
        <option defaultValue>...</option>
        <option value><input
                        required='required'
                        type='number'
                        id='Budget'
                        value={Budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}> 
                        </input>
                        </option value>


                  </div>
        
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default BudgetForm;
