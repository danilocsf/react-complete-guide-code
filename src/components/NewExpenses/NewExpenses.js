import React, { useState } from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (

        //onSaveExpenseData - função que sera chamada quando algo acontecer dentro do ExpenseForm component 
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>)}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpenses;