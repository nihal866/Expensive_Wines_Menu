import React,{useState, useEffect} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import './App.css';

let App = () => {
    
    useEffect( () => {
        fetch('https://api.sampleapis.com/beers/ale')
        .then(response => response.json())
        .then(
            data => {
                console.log(data);
                setExpenses(data);
            }
        );
    }, []);
    const [expenses, setExpenses] = useState([]);

    const saveExpenseDataHandler = (newExpenseData) => {
        setExpenses([newExpenseData, ...expenses]);
    }

    return (
        <div className="main">
            <h2>Expensive Wines</h2>
            <NewExpense onSaveExpenseData={ saveExpenseDataHandler } />
            <Expenses item={ expenses } />
        </div>
    );
}

export default App;