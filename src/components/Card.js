import React from 'react';
import './card.css';

const Card = ({cardDetails}) => {

  return (
    <div className="card">
      <div className="item1">
        <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="card-item__chip" alt="chip" />      </div>
      <div className="item2">
        <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="visa" className="card-item__typeImg" />
      </div>
      <div className="item3">{cardDetails.number ?
      <>        
        <p>{cardDetails.number.toString().substring(0,4)}</p>
        <p>{cardDetails.number.toString().substring(4,8)}</p>
        <p>{cardDetails.number.toString().substring(8,12)}</p>
        <p>{cardDetails.number.toString().substring(12,16)}</p> 
      </>
        :<span><p>####</p><p>####</p><p>####</p><p>####</p></span>}</div>
      <div className="item4">Card holder</div>
      <div className="item5">Expires</div>
      <div className="item6">{cardDetails.name ? cardDetails.name : <p>First Last</p>}</div>
      <div className="item7">{cardDetails.month ? cardDetails.month +'-'+ cardDetails.year : <p>MM-YY</p>}</div>
    </div>
  )
}

export default Card;
