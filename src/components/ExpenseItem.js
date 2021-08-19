import React from "react";
import './ExpenseItem.css'
const ExpenseItem = () => {
  return (
    <div className= "expense-item">
      <div>
        August 19 2021
      </div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className= "expense-item__price">
        <h2>$150.36</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
