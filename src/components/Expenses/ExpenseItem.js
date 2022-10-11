import React from "react";
import Card from "../UI/Card";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

let ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // const [newTitle, setNewTitle] = useState("");

    // let changeTitle = () => {
    //     setTitle(newTitle);
    // }

    // let changeHandler = (event) => {
    //     setNewTitle(event.target.value);
    // }
    
    return (
        <Card className='expense-item'>
            {/* <ExpenseDate date={props.date} /> */}
            <div className='expense-item-description'>
                <h2>{ props.title }</h2>
                <div className='expense-item-price'>{props.price}</div>
            </div>
            {/* <input type='text' value={ newTitle } onChange={ changeHandler }/>
            <button onClick={ changeTitle }>Click</button> */}
        </Card>
    );
}

export default ExpenseItem;