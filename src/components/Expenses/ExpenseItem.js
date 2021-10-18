import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  //Primeiro valor é o valor a ser alterado, o segundo a função que altera esse valor
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Tilte</button>
    </Card>
  );
}

export default ExpenseItem;
