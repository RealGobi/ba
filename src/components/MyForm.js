import React from 'react'

function MyForm({setYear, submitHandler, number, setNumber, name, setName, setMonth, ccv, setCcv, month, year}) {

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="number">Number:</label>
        <input type="number" name="number" value={number} onChange={e=>setNumber(e.target.value)} />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />
        <div className="sideBySide">
          <span className="expires">
            <label htmlFor="expires">Expiration Date:</label>
            <select name="month" id="expires" value={month} onChange={e=> setMonth(e.target.value)} >
              <option value="0" defaultValue hidden>Month</option>
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
            <select name="year" value={year}  id="expires" onChange={e=> setYear(e.target.value)}>
              <option value="0" defaultValue hidden>Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
            </select>
          </span>
          <span className="ccv">
            <label className="ccv" htmlFor="ccv">CCV</label>
            <input type="number" name="ccv" value={ccv} onChange={e=>setCcv(e.target.value)} />
          </span>
        </div>
        <button name="submit">Submit</button>
      </form>
    </div>
  )
}

export default MyForm;
