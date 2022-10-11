import React, { useState } from "react";
import './ExpenseForm.css';


let ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleChangeHandler = (event) => { setNewTitle(event.target.value) }
    const priceChangeHandler = (event) => { setNewPrice(event.target.value) }
    //const dateChangeHandler = (event) => { setNewDate(event.target.value) }

    const submitHandler = (event) => {
        event.preventDefault();

        let expenseData = {
            name: newTitle,
            price: newPrice,
            date: new Date(newDate)     
        }

        props.onSaveExpenseData(expenseData);
        
        setNewTitle('');
        setNewPrice('');
        setNewDate('');
    }

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={ titleChangeHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="text" value={newPrice} min="0.1" step="0.1" onChange={ priceChangeHandler } />
                </div>
                {/* <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={newDate} onChange={ dateChangeHandler } />
                </div> */}
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add New Wine</button>
            </div>
        </form>
    );
}

export default ExpenseForm;