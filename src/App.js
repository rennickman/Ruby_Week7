import React, { useState } from 'react';
import axios from 'axios';

import './app.css';

function App() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [answer, setAnswer] = useState("");


    const handleNum1 = e => {
        e.preventDefault();
        setNum1(e.target.value);
    };


    const handleNum2 = e => {
        e.preventDefault();
        setNum2(e.target.value);
    };


    
    const handleAddition = e => {
        e.preventDefault();
        const fetchAnswer = async () => {
            const data = await axios.post("http://localhost:4000/sum",
                { number1: num1, number2: num2 }, { headers: { Accept: 'application/json' } }
            );
            setAnswer(data.data.result);
        };
        fetchAnswer();
    };

    const handleSubtraction = e => {
        e.preventDefault();
        const fetchAnswer = async () => {
            const data = await axios.post("http://localhost:4000/subtract",
                { number1: num1, number2: num2 }, { headers: { Accept: 'application/json' } }
            );
            setAnswer(data.data.result);
        };
        fetchAnswer();
    };

    const handleMultiplication = e => {
        e.preventDefault();
        const fetchAnswer = async () => {
            const data = await axios.post("http://localhost:4000/multiply",
                { number1: num1, number2: num2 }, { headers: { Accept: 'application/json' } }
            );
            setAnswer(data.data.result);
        };
        fetchAnswer();
    };

    const handleDivision = e => {
        e.preventDefault();
        const fetchAnswer = async () => {
            const data = await axios.post("http://localhost:4000/divide",
                { number1: num1, number2: num2 }, { headers: { Accept: 'application/json' } }
            );
            setAnswer(data.data.result);
        };
        fetchAnswer();
    };
    



    return (
        <div className="app">

            <div className="calculator">
                <div className="inputs">
                    <input className='input' type="number" value={num1} onChange={handleNum1} />
                    <input className='input' type="number" value={num2} onChange={handleNum2} />
                </div>

                <div className="buttons">
                    <button className='button' onClick={handleAddition}>+</button>
                    <button className='button' onClick={handleSubtraction}>-</button>
                    <button className='button' onClick={handleMultiplication}>*</button>
                    <button className='button' onClick={handleDivision}>/</button>
                </div>

                {answer && <div className="answer">{num1} + {num2} = {answer}</div>}
            </div>
        </div>
    );
};


export default App;
