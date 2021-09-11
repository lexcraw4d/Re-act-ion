import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmt, setEnteredAmt] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amtChangeHandler = (event) => {
        setEnteredAmt(event.target.value)
       
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
       
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmt,
            date: new Date(enteredDate)
        }

        setEnteredAmt('')
        setEnteredTitle('')
        setEnteredDate('')

    };
    // const[userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmt: '',
    //     enteredDate: ''
    // })
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //      return {   ...prevState,
    //         enteredTitle: event.target.value,
    //      }
    //     })
    // }
    // const amtChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //         ...prevState,
    //         enteredAmt: event.target.value,
    //     }
    //     })
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState)=>{
    //         return {
    //         ...prevState,
    //         enteredDate: event.target.value,
    //         }
    //     })
    // }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler}name="" id="" value = {enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" onChange = {amtChangeHandler} value={enteredAmt}/>
          
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2030-12-31" onChange = {dateChangeHandler} value={enteredDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
