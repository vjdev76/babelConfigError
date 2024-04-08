import { useState } from 'react';

import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const HandleAdd = () => {
        setCounter(counter + 1);
        //otra forma de incrementar el valor: 
        //setCounter((c) => c + 1);
    }

    const HandleSubstract = () => {
        setCounter(counter - 1);
    }

    const HandleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h1> {counter} </h1>
            <button onClick={HandleAdd}>▲</button>
            <button onClick={HandleReset}>Reset</button>
            <button onClick={HandleSubstract}>▼</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
