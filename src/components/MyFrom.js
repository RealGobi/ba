import React, {useState} from 'react';
import Card from './Card';

const MyFrom = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expires, setExpires] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('hello');
  }

  return (
    <div className="my-form">
      <Card name={name} number={number} expires={expires} />
      <form onSubmit={submitHandler}>
        <label htmlFor="number">Number:</label>
        <input type="number" name="number" onChange={e=> setNumber(e.target.value)} />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={e=> setName(e.target.value)} />
        <div className="sideBySide">
          <span className="expires">
            <label htmlFor="expires">Expiration Date:</label>
            <select name="expiresMonth" id="expires">
              <option value="#">Month</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="expiresYear" id="expires">
              <option value="#">Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </span>
          <span className="ccv">
            <label className="ccv" htmlFor="ccv">CCV</label>
            <input type="number" name="ccv" onChange={e=> setExpires(e.target.value)} />
          </span>
        </div>
        <button name="submit">Submit</button>
      </form>
    </div>
  )
}

export default MyFrom;
