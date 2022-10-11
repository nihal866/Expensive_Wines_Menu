import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

let NewExpense = (props) => {

    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
        </div>
    );
}

export default NewExpense;