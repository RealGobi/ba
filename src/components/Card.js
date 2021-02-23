import React from 'react';
import './card.css';

const Card = ({name, number, expires}) => {

  return (
    <div className="card">
      <div className="item1">
        <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="card-item__chip" alt="chip" />      </div>
      <div className="item2">
        <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="visa" className="card-item__typeImg" />
      </div>
      <div className="item3">{number ? number :<span><p>####</p><p>####</p><p>####</p><p>####</p></span>}</div>
      <div className="item4">Card holder</div>
      <div className="item5">Expires</div>
      <div className="item6">{name ? name : <p>Name</p>}</div>
      <div className="item7">{expires ? expires : <p>00-00</p>}</div>
    </div>
  )
}

export default Card;
