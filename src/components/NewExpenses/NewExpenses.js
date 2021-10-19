import React, {useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        };
        props.onAddExpense(expenseData)
    };
    return (
        //onSaveExpenseData - função que sera chamada quando algo acontecer dentro do ExpenseForm component 
        <div className="new-expense">            
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpenses;