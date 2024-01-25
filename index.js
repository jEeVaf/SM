import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const messages = [
  "learn",
  "appldfsd",
  "get rich",
];

const Hello = () => {
  const [step, setStep] = useState(1);

  const handlernext = () => {
    
    if (step < 3) {
      setStep(step + 1);
    } 
  }; 

  const handlerback = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className='steps'>
      <div className='numbers'>
        <div className='active'>step {step}</div>
      </div>
      <p className="message">{messages[step - 1]}</p>
      <div className="button">
        <button style={{ backgroundColor: "red", color: "green" }} onClick={handlerback}>back</button>
        <button style={{ backgroundColor: "red", color: "green" }} onClick={handlernext}>next</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById('root'));
