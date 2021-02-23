import React from 'react';

const Card = ({name, number}) => {
  
  return (
    <div className="card">
      <div className="item1">
      <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="card-item__chip" alt="chip" />      </div>
      <div className="item2"></div>
      <div className="item3">{number}</div>
      <div className="item4"></div>
      <div className="item5"></div>
      <div className="item6">{name}</div>
      <div className="item7"></div>
    </div>
  )
}

export default Card;
