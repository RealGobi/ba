import React, {useState} from 'react';
import Card from './Card';

const MyFrom = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [ccv, setCcv] = useState('');

  return (
    <div className="my-form">
      <Card name={name} number={number} />
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={e=> setName(e.target.value)} />
        <label htmlFor="number">Number:</label>
        <input type="number" name="number" onChange={e=> setNumber(e.target.value)} />
        <label htmlFor="ccv">CCV:</label>
        <input type="text" name="ccv" onChange={e=> setCcv(e.target.value)} />
      </form>
    </div>
  )
}

export default MyFrom;
