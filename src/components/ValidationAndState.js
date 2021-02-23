import React, {useState} from 'react';

import MyForm from './MyForm';
import Card from './Card';


const ValidationAndState = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [ccv, setCcv] = useState('');
  const [card, setCard] = useState({});
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [numberErr, setNumberErr] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [ccvErr, setCcvErr] = useState('')
  const [monthErr, setMonthErr] = useState('')
  const [yearErr, setYearErr] = useState('')

  const clearForm = () => {
    setNumber('')
    setNumberErr('');
    setName('');
    setNameErr('');
    setCcv('');
    setCcvErr('');
    setYear('');
    setMonth('');
    setYearErr('');
    setMonthErr('');
  }

// validate

  const validate = () => {
    let numberErr = '';
    let nameErr = '';
    let ccvErr = '';
    let monthErr = '';
    let yearErr = '';

    const regEx =  /^[a-zA-Z]+ [a-zA-Z]+$/;

    if(number.length !==16) {
      numberErr = `Please enter a valid card number, 16 numbers. You have enterd: ${number.length} numbers.`
    }

    if(!regEx.test(name)) {
      nameErr = 'Please enter first and last name.'
    } 

    if (ccv.length !== 3) {
      ccvErr = 'Please enter a correct CCV, 3 numbers.'
    }

    if(month.length !== 2){
      monthErr = 'Please select month.'
    }

    if(year.length !== 2){
      yearErr = 'Please select year.'
    }


    if(numberErr || nameErr || ccvErr || monthErr || yearErr) {
      setNumberErr(numberErr);
      setNameErr(nameErr);
      setCcvErr(ccvErr);
      setMonthErr(monthErr);
      setYearErr(yearErr);
      return false;
    }
    return true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const isValid = validate();

    if(isValid){
      const newCard = {
        name,
        number,
        year,
        month,
        ccv
      }
      setCard(newCard);
      clearForm();
    }
  }


  return (
    <div className="my-form">
      <Card cardDetails={card} />
      <MyForm submitHandler={submitHandler} number={number} setNumber={setNumber} name={name} setName={setName} setMonth={setMonth} month={month} year={year} setYear={setYear} ccv={ccv} setCcv={setCcv} />
      <ul>
        {numberErr && <li style={{color:"red"}}>{numberErr}</li>}
        {nameErr && <li style={{color:"red"}}>{nameErr}</li>}
        {monthErr && <li style={{color:"red"}}>{monthErr}</li>}
        {yearErr && <li style={{color:"red"}}>{yearErr}</li>}
        {ccvErr && <li style={{color:"red"}}>{ccvErr}</li>}
      </ul>
    </div>
  )
}

export default ValidationAndState;
