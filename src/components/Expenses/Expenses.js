import React from "react";
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

let Expenses = (props) => {
    return (
        <Card className='expenses'>
            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                            key = {expense.id}
                            date = {expense.date}
                            title = {expense.name}
                            price = {expense.price} />
                    )
                )
            }
            {/* <ExpenseItem date={props.item[0].date} title={props.item[0].title} price={props.item[0].price} />
            <ExpenseItem date={props.item[1].date} title={props.item[1].title} price={props.item[1].price} />
            <ExpenseItem date={props.item[2].date} title={props.item[2].title} price={props.item[2].price} />
            <ExpenseItem date={props.item[3].date} title={props.item[3].title} price={props.item[3].price} /> */}
        </Card>
    );
}

export default Expenses;